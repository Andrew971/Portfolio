export default {
  name : 'Naven',
  description : '',
  field : [
    {
      name: "Contact",
      description: '',
      option: {
        type: 'contact',
        errorMessage: `Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.`,
        title: {
          text: `J'ai besoin d'un site internet?`
        },
        input: {
          field: [
            {
              fieldType: "single",
              inputType: "text",
              label: "Prénom",
              name: "firstname",
              placeholder: "Prénom",
              id: "stmt",
              autoComplete: "given-name",
              order: 2
            }, {
              fieldType: "single",
              inputType: "text",
              label: "Nom",
              name: "lastname",
              placeholder: "Nom",
              id: "stmt",
              autoComplete: "family-name",
              order: 1

            }, {
              fieldType: "single",
              inputType: "text",
              label: "Téléphone",
              name: "phone",
              placeholder: "Téléphone",
              id: "stmt",
              autoComplete: "tel-national",
              order: 3

            }, {
              fieldType: "select",
              label: "Langue de préférence",
              name: "language",
              placeholder: "Langue de préférence",
              id: "stmt",
              autoComplete: "language",
              order: 4,
              option: [
                {
                  text: 'English',
                  value: 'English'
                }, {
                  text: 'Français',
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
              placeholder: "Ecrivez les informations clés de votre projet.",
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
        errorMessage: `Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.`,
        title: {
          text: `J'embauche`
        },
        input: {
          field: [
            {
              fieldType: "single",
              inputType: "text",
              label: "Preénom",
              name: "firstname",
              placeholder: "Prénom",
              id: "stmt",
              autoComplete: "given-name",
              order: 2
            }, {
              fieldType: "single",
              inputType: "text",
              label: "Nom",
              name: "lastname",
              placeholder: "Nom",
              id: "stmt",
              autoComplete: "family-name",
              order: 1

            }, {
              fieldType: "single",
              inputType: "text",
              label: "Téléphone",
              name: "phone",
              placeholder: "Téléphone",
              id: "stmt",
              autoComplete: "tel-national",
              order: 3

            }, {
              fieldType: "select",
              label: "Langue de préférence",
              name: "language",
              placeholder: "Langue de préférence",
              id: "stmt",
              autoComplete: "language",
              order: 4,
              option: [
                {
                  text: 'English',
                  value: 'English'
                }, {
                  text: 'Français',
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
              label: "Entreprise",
              name: "company",
              placeholder: "Entreprise",
              id: "stmt",
              autoComplete: "Company",
              order: 6
            }, {
              fieldType: "multiline",
              label: "Message",
              name: "message",
              rows: "4",
              placeholder: "Ecrivez les informations clés du rôle que vous offrez.",
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
          text: `  Félicitation ! Nous avons envoyé votre email avec succés.
`
        },
        paragraph: {
          name: 'Paragraph',
          field: [
            {
              text: `Je vous recontacterai sous 48h.`,
              order: 1
            }, {
              text: `Merci`,
              order: 2
            }
          ]
        }
      }
    }
  ]
}