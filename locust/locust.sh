pip3 install locust

locust -f locust/locust.py --host http://localhost:8080 --users 5000 --spawn-rate 20