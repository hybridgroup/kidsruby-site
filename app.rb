# Load before Sinatra
require 'rubygems'
require 'compass' # must be loaded before sinatra

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
  # if params[:feedback] && params['from'] && params['from'] =~ EMAIL_REGEX
  #   email!('feedback@kanbanpad.com', ENV['FEEDBACK_EMAIL'] ||  'ron@hybridgroup.com, daniel@hybridgroup.com, hong@hybridgroup.com', "[Kanbanpad] Request from #{params[:name]}", :'email/help')
  #   'Thank you!'
  # else
  #   'You must enter your email address and your request to ask for help.'
  # end
  
  # Pony.mail(:to => 'jonathan@hybridgroup.com', :from => 'me@example.com', :subject => 'hi', :body => 'Hello there.')
  Pony.mail({
  :to => 'you@example.com',
  :via => :smtp,
  :via_options => {
    :address        => 'smtp.yourserver.com',
    :port           => '25',
    :user_name      => 'user',
    :password       => 'password',
    :authentication => :plain, # :plain, :login, :cram_md5, no auth by default
    :domain         => "localhost.localdomain" # the HELO domain provided by the client to the server
  }
})
end

def email!(from, to, subject, body)
  # if ENV['SENDGRID_USERNAME'] and ENV['SENDGRID_PASSWORD']
  #   Pony.mail(:to          => to,
  #             :from        => from,
  #             :subject     => subject,
  #             :body        => erb(body),
  #             :via         => :smtp,
  #             :via_options => {
  #                 :address        => 'smtp.sendgrid.net',
  #                 :port           => '25',
  #                 :user_name      => ENV['SENDGRID_USERNAME'],
  #                 :password       => ENV['SENDGRID_PASSWORD'],
  #                 :authentication    => :plain,
  #                 :domain         => (ENV['SENDGRID_DOMAIN'] || 'heroku.com')
  #             })
  # elsif ENV['GMAIL_SMTP_USER'] and ENV['GMAIL_SMTP_PASSWORD']
  #   Pony.mail(:to           => to,
  #             :from         => from,
  #             :subject      => subject,
  #             :body         => erb(body),
  #             :via          => :smtp,
  #             :via_options  => {
  #                 :address                => 'smtp.gmail.com',
  #                 :port                   => '587',
  #                 :enable_starttls_auto   => true,
  #                 :user_name              => ENV['GMAIL_SMTP_USER'],
  #                 :password               => ENV['GMAIL_SMTP_PASSWORD'],
  #                 :authentication         => 'login',
  #                 :domain                 => 'localhost.localdomain'
  #             })
  # else
  #   Pony.mail(:to => to,
  #     :from       => from,
  #     :subject    => subject,
  #     :body       => erb(body))
  # end

  Pony.mail(:to => 'jonathan@hybridgroup.com', :from => 'me@example.com', :subject => 'hi', :body => 'Hello there.')
end

def host_path(path = '/')
  "https://#{ENV['DOMAIN'] || 'www.kidsruby.com'}#{path}"
end
