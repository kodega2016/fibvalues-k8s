# Commands

To create secrets, run the following command:

```bash
kuebctl create secret generic <secret-name> --from-literal=<key>=<value>
kubectl creatre secret generic pgpassword --from-literal=POSTGRES_PASSWORD=supersecret
```
