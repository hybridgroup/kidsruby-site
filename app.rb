# Load before Sinatra
require 'rubygems'
require 'compass' # must be loaded before sinatra
require 'pony'

# Load Sinatra
require 'sinatra'
require 'lib/render_partial'

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
  Pony.mail(
        :from => params[:email],
        :to => 'jonathan@hybridgroup.com, ron@hybridgroup.com',
        :subject => 'Request for the Kidsruby newsletter',
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
end

post "/contact" do
  Pony.mail(
        :from => params[:email],
        :to => 'jonathan@hybridgroup.com, ron@hybridgroup.com',
        :subject => 'THG Site Contact Request',
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
end

