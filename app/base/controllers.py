#------------------------------------------------------------------------------
# Required Libraries
#------------------------------------------------------------------------------
from flask import Blueprint, render_template

#------------------------------------------------------------------------------
# Base Page Objects
#------------------------------------------------------------------------------
home = Blueprint('home', __name__)
contact = Blueprint('contact', __name__)
investors = Blueprint('investors', __name__)
team = Blueprint('team', __name__)
product = Blueprint('product', __name__)
download = Blueprint('download', __name__)
blog = Blueprint('blog', __name__)

#------------------------------------------------------------------------------
# Routes
#------------------------------------------------------------------------------
@home.route('/')
def show_home():
    return render_template("base/home.html")

@contact.route('/')
def show_contact():
    return render_template("base/contact.html")

@investors.route('/')
def show_investors():
    return render_template("base/investors.html")

@team.route('/')
def show_team():
    return render_template("base/team.html")

@product.route('/')
def show_product():
    return render_template("base/product.html")

@download.route('/')
def show_download():
	return render_template("base/download.html")

@blog.route('/')
def show_blog():
	return render_template("base/blog.html")

