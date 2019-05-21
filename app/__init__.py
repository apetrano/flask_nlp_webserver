from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config.from_object('config')
db = SQLAlchemy(app)


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


from app.mod_auth.controllers import mod_auth as auth_module
from app.demo.controllers import demo_home, demo_compliance_dashboard, demo_sentence_analyzer, demo_communication_dashboard
from app.base.controllers import home, team, product, contact, investors, download, blog


app.register_blueprint(auth_module)
app.register_blueprint(home, url_prefix='/')
app.register_blueprint(team, url_prefix='/team')
app.register_blueprint(product, url_prefix='/product')
app.register_blueprint(contact, url_prefix='/contact')
app.register_blueprint(investors, url_prefix='/investors')
app.register_blueprint(download, url_prefix='/download')
app.register_blueprint(blog, url_prefix='/blog')

app.register_blueprint(demo_home, url_prefix='/demo')
app.register_blueprint(demo_compliance_dashboard, url_prefix='/demo/compliance_dashboard')
app.register_blueprint(demo_communication_dashboard, url_prefix='/demo/communication_dashboard')
app.register_blueprint(demo_sentence_analyzer, url_prefix='/demo/sentence_analyzer')
db.create_all()

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404
