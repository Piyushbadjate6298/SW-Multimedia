import { Mail, MapPin, Phone } from 'lucide-react';
import { Form, Title } from '../components/Common';

export default function ContactPage() {
  return (
    <section className="page split" id="contact">
      <div>
        <Title title="Connect With Our Academic Operations Command" />
        <p>
          <MapPin /> SW Multimedia.
          <br />
          S 06, 2nd Floor, Khinvasara August High Street, Ulkanagari,
          Chhatrapati Sambhajinagar - 431001, Maharashtra, India.
        </p>
        <p><Phone /> +91 9112166105<br /><Phone /> +91 9011359616</p>
        <p><Mail /> swmultimedia2023@gmail.com</p>
        <button className="whats">Initialize Live Conversation via WhatsApp</button>
      </div>
      <Form button="Transmit Secure Help Request" />
    </section>
  );
}
