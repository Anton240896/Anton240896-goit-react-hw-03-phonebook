import React, { Component } from 'react';
import { Form, Label } from './contactForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

//solution 1

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInput = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   submitForm = evt => {
//     evt.preventDefault();
//     const { addContact } = this.props;
//     const newContact = this.state;

//     const keys = Object.keys(newContact);
//     keys.forEach(item => {
//       newContact[item] = newContact[item].trim();
//     });

//     const isExistingContact = addContact(newContact);
//     if (isExistingContact) {
//       return;
//     }

//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       phone: '',
//     });
//   };

//   render() {
//     const { name, phone } = this.state;
//     return (
//       <Form onSubmit={this.submitForm}>
//         <Label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleInput}
//             required
//           />
//         </Label>
//         <Label>
//           Phone
//           <input
//             type="tel"
//             name="phone"
//             value={phone}
//             onChange={this.handleInput}
//             required
//           />
//         </Label>
//         <button type="submit">Add contact</button>
//       </Form>
//     );
//   }
// }

// solution 2 with library Formic

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'The name is too short!')
    .max(25, 'The name is too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(2, 'The number is too short!')
    .max(20, 'The number is too long!')
    .required('Phone number is required!'),
});

export const ContactForm = onSubmit => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <input type="text" name="name" placeholder="Enter name..." />
        </Label>
        <Label>
          Phone
          <input type="tel" name="number" placeholder="Enter number..." />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
