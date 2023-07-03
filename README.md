## Task - C -

- NodeJs/Python + MySQL assignment Table "orders" has the following columns: orderld, title, description, createdAt Write a function in NodeJs/Python that returns all orders created in the past 7 days

### Models

- Order Model

```yaml
{
    orderId : "INT",
  title: "varchar",
    description: `varchar`,
    createdAt: "DATE",
}
```

## User APIs

### POST /createOrders

- Create a dummy orders from array of object.
- **Response format**

```yaml
{ "message": "Order Creation successfull" }
```

### GET /orders

- Get all orders created in past 7 days or 1 week.
- **Response format**

```yaml
{
  "data":

    "data": [
        {
            "orderId": 8,
            "title": "MI65LED TV",
            "description": "This 65 inch giant is the first from the brand to feature a 4K HDR 10-bit display with WCG that with precise colour reproduction brings any image to life. The",
            "createdAt": "2023-07-2"
        },
        {
            "orderId": 11,
            "title": "DELL laptop",
            "description": "Dell Inspiron is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a APU Quad Core A6 processor and ...",
            "createdAt": "2023-06-28"
        },
        {
            "orderId": 12,
            "title": "shirts",
            "description": "A shirt is a piece of clothing worn on the upper part of your body with a collar, sleeves, and buttons down the front.",
            "createdAt": "2023-06-30"
        },
        {
            "orderId": 13,
            "title": "MI65LED TV",
            "description": "This 65 inch giant is the first from the brand to feature a 4K HDR 10-bit display with WCG that with precise colour reproduction brings any image to life. The",
            "createdAt": "2023-07-02"
        }
    ]
}
```
