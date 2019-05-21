# Import flask dependencies
from flask import Blueprint, render_template

# Define the blueprint: 'auth', set its url prefix: app.url/auth
demo_home = Blueprint('demo_home', __name__)
demo_compliance_dashboard = Blueprint('demo_compliance_dashboard', __name__)
demo_communication_dashboard = Blueprint('demo_communication_dashboard', __name__)
demo_sentence_analyzer = Blueprint('demo_sentence_analyzer', __name__)

@demo_home.route('/')
def show_demo_home():
    return render_template("demo/demo_home.html")

@demo_compliance_dashboard.route('/')
def show_demo_compliance_dashboard():
    return render_template("demo/demo_compliance_dashboard.html")

@demo_communication_dashboard.route('/')
def show_demo_communication_dashboard():
    return render_template("demo/demo_communication_dashboard.html")

@demo_sentence_analyzer.route('/')
def show_demo_sentence_analyzer():
    return render_template("demo/demo_sentence_analyzer.html")


