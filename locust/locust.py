import time
from locust import HttpUser, task, between


class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def product_url(self):
        self.client.get(url="/api/product")

    @task
    def price_url(self):
        self.client.get(url="/api/price/132")

    @task
    def brand_url(self):
        self.client.get(url="/api/brand")