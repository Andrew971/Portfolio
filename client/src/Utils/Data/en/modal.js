

export default {
    name: 'Naven',
    description: '',
    field: [
      {
        name: "Contact",
        description: '',
        option: {
          type: 'contact',
          errorMessage: `Sorry...A problem occured when we tried to send your email. Please check your
                internet connection and try again.`,
          title: {
            text: `I need a website`
          },
          input: {
            field: [
              {
                fieldType: "single",
                inputType: "text",
                label: "First Name",
                name: "firstname",
                placeholder: "first name",
                id: "stmt",
                autoComplete: "given-name",
                order: 1
              }, {
                fieldType: "single",
                inputType: "text",
                label: "Last Name",
                name: "lastname",
                placeholder: "Last name",
                id: "stmt",
                autoComplete: "family-name",
                order: 2

              }, {
                fieldType: "single",
                inputType: "text",
                label: "Phone Number",
                name: "phone",
                placeholder: "Phone Number",
                id: "stmt",
                autoComplete: "tel-national",
                order: 3

              }, {
                fieldType: "select",
                label: "Prefered Language",
                name: "language",
                placeholder: "Prefered Language",
                id: "stmt",
                autoComplete: "language",
                order: 4,
                option: [
                  {
                    text: 'English',
                    value: 'English'
                  }, {
                    text: 'French',
                    value: 'French'
                  }
                ]
              }, {
                fieldType: "single",
                inputType: "text",
                label: "E-mail",
                name: "email",
                placeholder: "exemple@xxxx.com",
                id: "stmt",
                autoComplete: "email",
                order: 5
              }, {
                fieldType: "multiline",
                label: "Message",
                name: "message",
                rows: "4",
                placeholder: "Tell me the headlines of your project.",
                id: "stmt",
                autoComplete: "tel-national",
                order: 6
              }
            ]
          }
        }
      }, {
        name: "Hire",
        description: '',
        option: {
          type: 'contact',
          errorMessage: `Sorry...A problem occured when we tried to send your email. Please check your
                internet connection and try again.`,
          title: {
            text: `Looking for hiring`
          },
          input: {
            field: [
              {
                fieldType: "single",
                inputType: "text",
                label: "First Name",
                name: "firstname",
                placeholder: "first name",
                id: "stmt",
                autoComplete: "given-name",
                order: 1
              }, {
                fieldType: "single",
                inputType: "text",
                label: "Last Name",
                name: "lastname",
                placeholder: "Last name",
                id: "stmt",
                autoComplete: "family-name",
                order: 2

              }, {
                fieldType: "single",
                inputType: "text",
                label: "Phone Number",
                name: "phone",
                placeholder: "Phone Number",
                id: "stmt",
                autoComplete: "tel-national",
                order: 3

              }, {
                fieldType: "select",
                label: "Prefered Language",
                name: "language",
                placeholder: "Prefered Language",
                id: "stmt",
                autoComplete: "language",
                order: 4,
                option: [
                  {
                    text: 'English',
                    value: 'English'
                  }, {
                    text: 'French',
                    value: 'French'
                  }
                ]
              }, {
                fieldType: "single",
                inputType: "text",
                label: "E-mail",
                name: "email",
                placeholder: "exemple@xxxx.com",
                id: "stmt",
                autoComplete: "email",
                order: 5
              }, {
                fieldType: "single",
                inputType: "text",
                label: "Company",
                name: "company",
                placeholder: "Company",
                id: "stmt",
                autoComplete: "Company",
                order: 6
              }, {
                fieldType: "multiline",
                label: "Message",
                name: "message",
                rows: "4",
                placeholder: "Tell me the headlines of your project.",
                id: "stmt",
                autoComplete: "tel-national",
                order: 7
              }
            ]
          }
        }
      }, {
        name: "Confirmation",
        description: '',
        option: {
          type: 'confirmation',
          title: {
            text: `Congratulation ! We successfully sent your email`
          },
          paragraph: {
            name: 'Paragraph',
            field: [
              {
                text: `I will contact you back within 48h.`,
                order: 1
              }, {
                text: `Thank you.`,
                order: 2
              }
            ]
          }
        }
      }
    ]
  }