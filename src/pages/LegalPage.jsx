import { Title } from '../components/Common';

const policyText = {
  Privacy: 'SW Multimedia enforces stringent database processing constraints regarding user diagnostic tracking telemetry and storage. No individual record blocks or contact coordinates will be distributed, leased, or sold.',
  Terms: 'Users accessing SW Multimedia platforms agree to respect institutional property boundaries and avoid malicious exploitation, scraping, or unauthorized attempts.',
  Refund: 'All finalized course seat reservations, laboratory confirmation charges, or receipt amounts are irrevocable once account configuration is validated.',
};

export default function LegalPage({ type }) {
  return (
    <section className="page">
      <Title title={`${type} Policy`} />
      <p className="big">{policyText[type]}</p>
    </section>
  );
}
