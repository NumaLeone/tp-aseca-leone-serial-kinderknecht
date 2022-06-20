import time
from locust import HttpUser, task, between


class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def prodyct_url(self):
        self.client.get(url="/api/product")

    @task
    def price_url(self):
        self.client.get(url="/api/price")

    @task
    def brand_url(self):
        self.client.get(url="/api/brand")