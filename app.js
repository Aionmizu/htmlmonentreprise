// Instance Vue.js pour la FAQ
new Vue({
    el: '#faq-app',
    data: {
        faqItems: [
            {
                question: 'Q: Quels services offrez-vous?',
                answer: 'R: Nous offrons le développement web, le design UX/UI, le marketing digital, et la consultation technique.',
                showAnswer: false
            },
            {
                question: 'Q: Comment puis-je vous contacter?',
                answer: 'R: Vous pouvez nous contacter via le formulaire de contact sur notre site ou par téléphone au 01 23 45 67 89.',
                showAnswer: false
            },
            {
                question: 'Q: Quels sont vos tarifs?',
                answer: 'R: Nos tarifs sont compétitifs et adaptés à chaque projet. Contactez-nous pour un devis personnalisé.',
                showAnswer: false
            }
        ]
    },
    methods: {
        toggleAnswer(index) {
            this.faqItems[index].showAnswer = !this.faqItems[index].showAnswer;
        }
    }
});

// Instance Vue.js pour le formulaire de contact
new Vue({
    el: '#contact-app',
    data: {
        form: {
            name: '',
            email: '',
            subject: '',
            genre: '',
            country: '',
            message: ''
        },
        errors: {},
        successMessage: ''
    },
    methods: {
        submitForm() {
            this.errors = {};
            this.successMessage = '';

            // Validation du nom
            if (!this.form.name) {
                this.errors.name = "Le nom est requis.";
            }

            // Validation de l'e-mail
            if (!this.form.email) {
                this.errors.email = "L'adresse e-mail est requise.";
            } else if (!this.validEmail(this.form.email)) {
                this.errors.email = "L'adresse e-mail n'est pas valide.";
            }

            // Validation du sujet
            if (!this.form.subject) {
                this.errors.subject = "Le sujet est requis.";
            }

            // Validation du genre
            if (!this.form.genre) {
                this.errors.genre = "Veuillez sélectionner votre genre.";
            }

            // Validation du pays
            if (!this.form.country) {
                this.errors.country = "Veuillez sélectionner votre pays.";
            }

            // Validation du message
            if (!this.form.message) {
                this.errors.message = "Le message est requis.";
            }

            // Vérifier s'il y a des erreurs
            if (Object.keys(this.errors).length === 0) {
                // Soumettre le formulaire (simulation)
                // Ici, vous pouvez envoyer les données à votre serveur via une requête AJAX

                // Afficher un message de succès
                this.successMessage = "Votre message a été envoyé avec succès !";

                // Réinitialiser le formulaire
                this.form = {
                    name: '',
                    email: '',
                    subject: '',
                    genre: '',
                    country: '',
                    message: ''
                };
            }
        },
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
            return re.test(email);
        }
    }
});
