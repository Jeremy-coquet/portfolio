// pages/api/contact.js
import nodemailer from 'nodemailer';

async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message, prenom } = req.body;

        // Configurer le transporteur SMTP avec service de messagerie
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Mettre à true si SSL est requis
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to: 'jeremy.coquet38@gmail.com',
				replyTo: email,
                subject: `Nouveau message de ${prenom} ${name}`,
                text: `Email: ${email}\nMessage: ${message}`,
            });

            return res.status(200).json({ message: 'Email envoyé avec succès' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email', error);
            return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}

export default handler;
