import { useForm, ValidationError } from '@formspree/react'
import useAnimateOnScroll from '../../utils/hooks/useAnimateOnScroll'
import '../../styles/components/contact.scss'
import '../../styles/themes/global.scss'

function Contact() {
    const [state, handleSubmit] = useForm("xzzbelve")
    const ref = useAnimateOnScroll()

    const handleFormSubmit = (event) => {
        event.preventDefault() // Prévenir le comportement par défaut du formulaire
        handleSubmit(event) // Appeler la fonction handleSubmit de Formspree
    }

    return (
        <div className='form-container animated-element' ref={ref}>
            {/* Afficher le formulaire seulement si l'envoi n'est pas réussi */}
            {!state.succeeded && (
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="form__names">
                        <div className="name">
                            <label htmlFor="lastname">Nom</label>
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                placeholder="Votre nom"
                                autoComplete="true"
                                required
                            />
                            <ValidationError
                                prefix="Lastname"
                                field="lastname"
                                errors={state.errors}
                            />
                        </div>
                        <div className="name">
                            <label htmlFor="firstname">Prénom</label>
                            <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                placeholder="Votre prénom"
                                autoComplete="true"
                                required
                            />
                            <ValidationError
                                prefix="Firstname"
                                field="firstname"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <label htmlFor="email">Adresse E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Votre adresse e-mail"
                        autoComplete="true"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30" rows="10"
                        placeholder="Votre message ici ..."
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Envoyer
                    </button>
                </form>
            )}

            {/* Afficher le message de succès seulement si l'envoi est réussi */}
            {state.succeeded && (
                <p>Merci pour votre message ! Je vous contacterai bientôt.</p>
            )}
        </div>
    )
}

export default Contact