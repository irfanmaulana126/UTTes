from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/todo'
db = SQLAlchemy(app)


# Model
class formRegis(db.Model):
    __tablename__ = "formRegis"
    id = db.Column(db.Integer, primary_key=True)
    idMhs = db.Column(db.String(20))
    idMK = db.Column(db.String(100))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __init__(self, idMhs, idMK):
        self.idMhs = idMhs
        self.idMK = idMK

    def __repr__(self):
        return f"{self.id}"


class Mhs(db.Model):
    __tablename__ = "Mhs"
    id = db.Column(db.Integer, primary_key=True)
    Mhs = db.Column(db.String(20))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __init__(self, Mhs):
        self.Mhs = Mhs

    def __repr__(self):
        return f"{self.id}"

class Mk(db.Model):
    __tablename__ = "Mk"
    id = db.Column(db.Integer, primary_key=True)
    Mk = db.Column(db.String(20))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __init__(self, Mk):
        self.Mk = Mk

    def __repr__(self):
        return f"{self.id}"


db.create_all()


class formRegisSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = formRegis
        sqla_session = db.session

    id = fields.Number(dump_only=True)
    idMK = fields.String(required=True)
    idMhs = fields.String(required=True)

class MhsSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = Mhs
        sqla_session = db.session

    id = fields.Number(dump_only=True)
    Mhs = fields.String(required=True)

class MkSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = Mk
        sqla_session = db.session

    id = fields.Number(dump_only=True)
    Mk = fields.String(required=True)


if __name__ == "__main__":
    app.run(debug=True)