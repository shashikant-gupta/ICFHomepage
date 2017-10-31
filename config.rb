# Note that while this file is in our config folder, it is
# symlinked to our site folders, so paths are relative from there


# Require any additional compass plugins here.
# Compass Configuration

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"          #where the CSS will saved
sass_dir = "assets/scss"        #where our .scss files are
images_dir = "assets/images"    #the folder with images
javascripts_dir = "assets/js"   #the folder with JS
fonts_dir = "assets/fonts"      #the folder with Fonts

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true   #because we're not working from the root

# You can select your preferred output style here (can be overridden via the command line):
output_style = :compressed # After dev :compressed :expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true
sourcemap = true

# Obviously
preferred_syntax = :scss



