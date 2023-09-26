//function handleProfileSignup() {
  //Promise.all([uploadPhoto(), createUser()])
   // .then(([body, firstName, lastName]) => {
     // console.log('Got a response from the API');
     // console.log(`body: ${body}`);
     // console.log(`firstName: ${firstName}`);
     // console.log(`lastName: ${lastName}`);
   // })
   // .catch(() => {
    //  console.log('Signup system offline');
  //  });
//}
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((data) => {
      const { body } = data;
      createUser()
        .then((data) => {
          const { firstName } = data;
          const { lastName } = data;
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
