from flask_socketio import SocketIO, emit
from flask import Flask, render_template, url_for, copy_current_request_context
from random import random
from time import sleep
from threading import Thread, Event
from random import *
import string

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['DEBUG'] = True

#turn the flask app into a socketio app
socketio = SocketIO(app)

#random number Generator Thread
thread = Thread()
thread_stop_event = Event()

class RandomThread(Thread):
    def __init__(self):
        self.delay = 3
        super(RandomThread, self).__init__()

    def randomNumberGenerator(self):
        """
        Generate a random number every 1 second and emit to a socketio instance (broadcast)
        Ideally to be run in a separate thread?
        """
        #infinite loop of magical random numbers
        print("Making random numbers")
        x=0
        n = 5
        while  x < n:
            #se generan numero automaticamente menores a 60 y con hasta 2 decimales
            numberAuto1 = round(random()*100, 2)
            numberAuto2 = round(random()*100, 2)
            numberAuto3 = round(random()*100, 2)
            numberCamion1 = round(random()*100, 2)
            numberCamion2 = round(random()*100, 2)
            numberCamion3 = round(random()*100, 2)
            numberCamioneta1 = round(random()*100, 2)
            numberCamioneta2 = round(random()*100, 2)
            numberCamioneta3 = round(random()*100, 2)
            numberBus1 = round(random()*100, 2)
            numberBus2 = round(random()*100, 2)
            numberBus3 = round(random()*100, 2)
            #se envian a traves de socket.io al archivo js 
            socketio.emit('NumeroAuto', {'numberAuto1': numberAuto1,'numberAuto2': numberAuto2,'numberAuto3': numberAuto3}, namespace='/test')
            socketio.emit('NumeroCamion', {'numberCamion1': numberCamion1,'numberCamion2': numberCamion2,'numberCamion3': numberCamion3}, namespace='/test')
            socketio.emit('NumeroCamioneta', {'numberCamioneta1': numberCamioneta1,'numberCamioneta2': numberCamioneta2,'numberCamioneta3': numberCamioneta3}, namespace='/test')
            socketio.emit('NumeroBus', {'numberBus1': numberBus1,'numberBus2':numberBus2,'numberBus3':numberBus3}, namespace='/test')
            #se generan letras en par que indican una supuesta patente
            allchar = string.ascii_letters 
            l1 = "".join(choice(allchar) for x in range(0,2))
            l2 = "".join(choice(allchar) for x in range(0,2))
            l3 = "".join(choice(allchar) for x in range(0,2))
            l4 = "".join(choice(allchar) for x in range(0,2))
            socketio.emit('PatenteAuto', {'l1':l1.upper()}, namespace='/test')
            socketio.emit('PatenteCamioneta', {'l2':l2.upper()}, namespace='/test')
            socketio.emit('PatenteCamion', {'l3':l3.upper()}, namespace='/test')
            socketio.emit('PatenteBus', {'l4':l4.upper()}, namespace='/test')
            x+=1
            sleep(self.delay)

    def run(self):
        self.randomNumberGenerator()


@app.route('/')
def index():
    #only by sending this page first will the client be connected to the socketio instance
    return render_template('index.html')

@socketio.on('connect', namespace='/test')
def test_connect():
    # need visibility of the global thread object
    global thread
    print('Client connected')

    #Start the random number generator thread only if the thread has not been started before.
    if not thread.isAlive():
        print("Comienza proceso de generacion de numeros ()")
        thread = RandomThread()
        thread.start()


if __name__ == '__main__':
    app.run(host= '201.186.231.218')
