# Load before Sinatra
require 'rubygems'
require 'compass' # must be loaded before sinatra
require 'pony'
require 'hominid'

# Load Sinatra
require 'sinatra'
require './lib/render_partial'

# Load after Sinatra
require 'haml' # must be loaded after sinatra

# Set Sinatra's variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public, 'public'
set :haml, {:format => :html5 } # Get with the program. Start using HTML5. Comment out if you're not ready.

# Configure Compass
configure do
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config.rb'))
end

# At a minimum the main sass file must reside within the views directory
# We create /views/stylesheets where all our sass files can safely reside
get '/stylesheets/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  scss(:"stylesheets/#{params[:name]}", Compass.sass_engine_options)
end

get '/about' do
  haml :about, :layout => :'layouts/application'
end

get '/' do
  haml :home, :layout => :'layouts/application'
end

get '/download' do
  haml :download, :layout => :'layouts/application'
end

get '/contact' do
  haml :contact, :layout => :'layouts/application'
end

post '/newsletter' do
=begin
  Pony.mail(
        :from => params[:email],
        :to => 'ron+kidsrubynews@hybridgroup.com',
        :subject => 'KidsRuby Newsletter Signup',
        :body => "#{params[:email]} wants to subscribe to the newsletter for kidsruby",
        :port => '587',
        :via => :smtp,
        :via_options => { 
          :address              => 'smtp.sendgrid.net', 
          :port                 => '25', 
          :user_name            => ENV['SENDGRID_USERNAME'], 
          :password             => ENV['SENDGRID_PASSWORD'], 
          :authentication       => 'plain', 
          :domain               => ENV['SENDGRID_DOMAIN']
        }) if settings.environment == :production
=end

  if ENV['MAILCHIMP_API_KEY'] and ENV['MAILCHIMP_LIST']
    @mailchimp ||= Hominid::API.new(ENV['MAILCHIMP_API_KEY'])
    @mailchimp.list_subscribe(ENV['MAILCHIMP_LIST'], params[:email], '', 'html', true, true, true, false)
  end
end

post "/contact" do
  Pony.mail(
        :from => params[:email],
        :to => 'ron+kidsruby@hybridgroup.com',
        :subject => 'KidsRuby Site Contact Request',
        :body => "#{params[:name]} <#{params[:email]}> sent a message: #{params[:message]}",
        :port => '587',
        :via => :smtp,
        :via_options => { 
          :address              => 'smtp.sendgrid.net', 
          :port                 => '25', 
          :user_name            => ENV['SENDGRID_USERNAME'], 
          :password             => ENV['SENDGRID_PASSWORD'], 
          :authentication       => 'plain', 
          :domain               => ENV['SENDGRID_DOMAIN']
        }) if settings.environment == :production

  if params[:newsletter] == '1'
    if ENV['MAILCHIMP_API_KEY'] and ENV['MAILCHIMP_LIST']
      @mailchimp ||= Hominid::API.new(ENV['MAILCHIMP_API_KEY'])
      n = params[:name].split(' ')
      first = n.shift.to_s
      last = n.join(' ')
      @mailchimp.list_subscribe(ENV['MAILCHIMP_LIST'], params[:email], {'FNAME' => first, 'LNAME' => last}, 'html', true, true, true, false)
    end
  end
end

