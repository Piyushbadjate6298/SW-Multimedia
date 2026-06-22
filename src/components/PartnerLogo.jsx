import { siAccenture, siGooglecloud, siInfosys, siSap, siTcs, siWipro } from 'simple-icons';

const icons = {
  Accenture: siAccenture,
  'Google Cloud': siGooglecloud,
  Infosys: siInfosys,
  SAP: siSap,
  TCS: siTcs,
  Wipro: siWipro,
};

function MicrosoftMark() {
  return (
    <svg className="logoMark microsoftLogo" viewBox="0 0 24 24" role="img" aria-label="Microsoft logo">
      <rect x="2" y="2" width="9.4" height="9.4" fill="#f25022" />
      <rect x="12.6" y="2" width="9.4" height="9.4" fill="#7fba00" />
      <rect x="2" y="12.6" width="9.4" height="9.4" fill="#00a4ef" />
      <rect x="12.6" y="12.6" width="9.4" height="9.4" fill="#ffb900" />
    </svg>
  );
}

function AwsMark() {
  return (
    <svg className="logoMark wordSvg awsLogo" viewBox="0 0 72 42" role="img" aria-label="AWS logo">
      <text x="6" y="24" fontSize="22" fontWeight="800" fill="#232f3e" fontFamily="Arial, sans-serif">aws</text>
      <path d="M22 31c10 6 24 5 34-2" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
      <path d="M51 27l8 1-5 6" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechMahindraMark() {
  return (
    <svg className="logoMark wordSvg techMahindraLogo" viewBox="0 0 98 42" role="img" aria-label="Tech Mahindra logo">
      <text x="4" y="19" fontSize="14" fontWeight="800" fill="#dd052b" fontFamily="Arial, sans-serif">Tech</text>
      <text x="4" y="35" fontSize="14" fontWeight="800" fill="#dd052b" fontFamily="Arial, sans-serif">Mahindra</text>
    </svg>
  );
}

function CapgeminiMark() {
  return (
    <svg className="logoMark wordSvg capgeminiLogo" viewBox="0 0 112 42" role="img" aria-label="Capgemini logo">
      <text x="3" y="26" fontSize="17" fontWeight="700" fill="#0070ad" fontFamily="Arial, sans-serif">Capgemini</text>
      <path d="M91 9c12 1 17 13 7 22-5 5-12 6-18 4 6-4 9-10 7-16-1-4 1-8 4-10Z" fill="none" stroke="#12abdb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IbmMark() {
  return (
    <svg className="logoMark wordSvg ibmLogo" viewBox="0 0 76 42" role="img" aria-label="IBM logo">
      <defs>
        <pattern id="ibm-stripes" width="76" height="6" patternUnits="userSpaceOnUse">
          <rect width="76" height="2.7" fill="#052fad" />
        </pattern>
      </defs>
      <text x="4" y="31" fontSize="29" fontWeight="900" fill="url(#ibm-stripes)" fontFamily="Arial Black, Arial, sans-serif">IBM</text>
    </svg>
  );
}

function SalesforceMark() {
  return (
    <svg className="logoMark wordSvg salesforceLogo" viewBox="0 0 96 58" role="img" aria-label="Salesforce logo">
      <path d="M38 14c5-7 15-8 21-2 4-2 10-1 13 3 8 0 15 7 15 16s-7 16-16 16H26c-10 0-18-7-18-16 0-8 7-15 15-15 4-5 10-6 15-2Z" fill="#00a1e0" />
      <text x="20" y="35" fontSize="12" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">salesforce</text>
    </svg>
  );
}

const customMarks = {
  Microsoft: <MicrosoftMark />,
  AWS: <AwsMark />,
  'Tech Mahindra': <TechMahindraMark />,
  Capgemini: <CapgeminiMark />,
  IBM: <IbmMark />,
  Salesforce: <SalesforceMark />,
};

export default function PartnerLogo({ partner }) {
  const icon = icons[partner.name];
  const isWideLogo = !icon && partner.name !== 'Microsoft';
  return (
    <div className="partnerItem" title={partner.name}>
      <span className={`partnerLogo${isWideLogo ? ' partnerLogoWide' : ''}`} style={{ '--brand-color': partner.color }}>
        {icon ? (
          <svg className="logoMark" viewBox="0 0 24 24" role="img" aria-label={`${partner.name} logo`}>
            <path d={icon.path} />
          </svg>
        ) : customMarks[partner.name]}
      </span>
      <span className={isWideLogo ? 'srOnly' : undefined}>{partner.name}</span>
    </div>
  );
}
