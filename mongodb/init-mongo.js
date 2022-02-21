db.createUser(
    {
        "user": "dev-test",
        "pwd": "dev-test",
        "roles": [{
            "role": "readWrite",
            "db": "dev-test"
        }]
    }
)