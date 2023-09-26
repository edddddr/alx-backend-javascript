function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([body, firstName, lastName]) => {
      console.log('Got a response from the API');
      console.log(`body: ${body}`);
      console.log(`firstName: ${firstName}`);
      console.log(`lastName: ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
