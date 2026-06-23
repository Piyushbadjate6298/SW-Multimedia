import {
  Award,
  BriefcaseBusiness,
  FolderKanban,
  MessagesSquare,
  Route,
  UsersRound,
} from 'lucide-react';
import {
  siAnsible,
  siAngular,
  siApachehadoop,
  siBurpsuite,
  siC,
  siCisco,
  siCloudflare,
  siDocker,
  siDotnet,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGo,
  siGoogleads,
  siGoogleanalytics,
  siGooglecloud,
  siHackthebox,
  siHtml5,
  siJavascript,
  siJenkins,
  siKotlin,
  siKubernetes,
  siLinux,
  siMeta,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPytorch,
  siPython,
  siReact,
  siScikitlearn,
  siSemrush,
  siSap,
  siSplunk,
  siTensorflow,
  siTerraform,
  siTryhackme,
  siTypescript,
  siWireshark,
} from 'simple-icons';

const customLogos = {
  AWS: {
    label: 'AWS',
    color: '#ff9900',
    bg: '#fff7ed',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  Azure: { label: 'AZ', color: '#0078d4', bg: '#eff6ff' },
  Salesforce: { label: 'SF', color: '#00a1e0', bg: '#ecfeff' },
  'Power BI': { label: 'PBI', color: '#f2c811', bg: '#fffbeb' },
  Tableau: { label: 'TAB', color: '#1f77b4', bg: '#eff6ff' },
  Java: { label: 'Java', color: '#e76f00', bg: '#fff7ed' },
  'C++': { label: 'C++', color: '#00599c', bg: '#eff6ff' },
  'C#': { label: 'C#', color: '#68217a', bg: '#faf5ff' },
  'Adobe XD': { label: 'Xd', color: '#ff61f6', bg: '#fdf2f8' },
  Adobe: { label: 'Ad', color: '#ff0000', bg: '#fef2f2' },
  Photoshop: { label: 'Ps', color: '#31a8ff', bg: '#eff6ff' },
  Illustrator: { label: 'Ai', color: '#ff9a00', bg: '#fff7ed' },
  Canva: { label: 'Ca', color: '#00c4cc', bg: '#ecfeff' },
  CCNA: { label: 'CCNA', color: '#1ba0d7', bg: '#ecfeff' },
  CCNP: { label: 'CCNP', color: '#1ba0d7', bg: '#ecfeff' },
  SEO: { label: 'SEO', color: '#16a34a', bg: '#f0fdf4' },
  'AI Agents': { label: 'AI', color: '#7c3aed', bg: '#f5f3ff' },
  NLP: { label: 'NLP', color: '#0f766e', bg: '#f0fdfa' },
  'Prompt Engineering': { label: 'GPT', color: '#111827', bg: '#f8fafc' },
};

const iconsByName = {
  'Full Stack Development': siReact,
  'MERN Stack': siMongodb,
  'MEAN Stack': siAngular,
  'Java Full Stack': customLogos.Java,
  'Python Full Stack': siPython,
  'PHP Development': siPhp,
  '.NET Development': siDotnet,
  'Mobile App Development': siKotlin,
  Python: siPython,
  Java: customLogos.Java,
  C: siC,
  'C++': customLogos['C++'],
  'C#': customLogos['C#'],
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  PHP: siPhp,
  Go: siGo,
  Kotlin: siKotlin,
  AWS: customLogos.AWS,
  Azure: customLogos.Azure,
  'Google Cloud Platform': siGooglecloud,
  Linux: siLinux,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Jenkins: siJenkins,
  Terraform: siTerraform,
  Ansible: siAnsible,
  'CI/CD': siGithub,
  'Artificial Intelligence': siTensorflow,
  'Machine Learning': siScikitlearn,
  'Deep Learning': siPytorch,
  'Generative AI': siTensorflow,
  'Prompt Engineering': customLogos['Prompt Engineering'],
  'AI Agents': customLogos['AI Agents'],
  'Computer Vision': siPytorch,
  NLP: customLogos.NLP,
  'Data Science': siPython,
  'Power BI': customLogos['Power BI'],
  Tableau: customLogos.Tableau,
  SQL: siPostgresql,
  'Big Data': siApachehadoop,
  'Business Analytics': siGoogleanalytics,
  'Ethical Hacking': siHackthebox,
  'Penetration Testing': siBurpsuite,
  'SOC Analyst': siSplunk,
  'Network Security': siCloudflare,
  'Cloud Security': siCloudflare,
  'Salesforce Administrator': customLogos.Salesforce,
  'Salesforce Developer': customLogos.Salesforce,
  'Salesforce Consultant': customLogos.Salesforce,
  'SAP FICO': siSap,
  'SAP MM': siSap,
  'SAP SD': siSap,
  'SAP HANA': siSap,
  Figma: siFigma,
  'Adobe XD': customLogos['Adobe XD'],
  'UX Research': siFigma,
  Wireframing: siFigma,
  Prototyping: siFigma,
  Photoshop: customLogos.Photoshop,
  Illustrator: customLogos.Illustrator,
  Canva: customLogos.Canva,
  'Motion Graphics': customLogos.Adobe,
  'Brand Design': customLogos.Adobe,
  CCNA: customLogos.CCNA,
  CCNP: customLogos.CCNP,
  'Network Administration': siCisco,
  SEO: customLogos.SEO,
  'Google Ads': siGoogleads,
  'Meta Ads': siMeta,
  'Social Media Marketing': siMeta,
  'Content Marketing': siSemrush,
  'Email Marketing': siGoogleads,
};

const popularStacks = {
  'AWS Cloud Training Engine': [customLogos.AWS],
  'Enterprise DevOps Pipeline': [siDocker, siKubernetes, siJenkins, siTerraform],
  'Full Stack Web Engineering': [siReact, siNodedotjs, siNextdotjs, siMongodb],
  'Artificial Intelligence Hub': [siTensorflow, siPytorch, siScikitlearn, siPython],
  'Advanced Data Science Tracks': [siPython, siPostgresql, siApachehadoop, customLogos['Power BI']],
  'Information & Cyber Assurance': [siHackthebox, siBurpsuite, siWireshark, siCloudflare],
  'Salesforce Core Ecosystem': [customLogos.Salesforce, siSap, siGooglecloud, siGithub],
  'UI/UX Architecture Systems': [siFigma, customLogos['Adobe XD'], customLogos.Canva, customLogos.Adobe],
};

const featureIcons = {
  'Industry Trainers': { Icon: UsersRound, color: '#0ea5e9' },
  'Real-Time Projects': { Icon: FolderKanban, color: '#16a34a' },
  'Internship Programs': { Icon: BriefcaseBusiness, color: '#7c3aed' },
  'Placement Assistance': { Icon: Award, color: '#f59e0b' },
  'Mock Interviews': { Icon: MessagesSquare, color: '#ef4444' },
  'Career Support': { Icon: Route, color: '#0f766e' },
};

function normalizeIcon(icon) {
  if (!icon) return null;
  if (icon.path) {
    return {
      label: icon.title,
      path: icon.path,
      color: `#${icon.hex}`,
      bg: `#${icon.hex}12`,
    };
  }
  return icon;
}

function LogoTile({ icon, compact = false }) {
  const data = normalizeIcon(icon);
  if (!data) return null;

  return (
    <span
      className={`logoTile${compact ? ' logoTileCompact' : ''}`}
      style={{ '--logo-color': data.color, '--logo-bg': data.bg || `${data.color}12` }}
      title={data.label}
      aria-label={data.label}
    >
      {data.image ? (
        <img src={data.image} alt="" loading="lazy" />
      ) : data.path ? (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d={data.path} />
        </svg>
      ) : (
        <span>{data.label}</span>
      )}
    </span>
  );
}

function resolveFallback(name, category) {
  if (category?.includes('Software')) return siHtml5;
  if (category?.includes('Cloud')) return siGooglecloud;
  if (category?.includes('DevOps')) return siDocker;
  if (category?.includes('Artificial')) return siTensorflow;
  if (category?.includes('Data')) return siPython;
  if (category?.includes('Cyber')) return siCloudflare;
  if (category?.includes('Networking')) return siCisco;
  if (category?.includes('Marketing')) return siGoogleads;
  if (category?.includes('Design')) return siFigma;
  return { label: name.slice(0, 3).toUpperCase(), color: '#0059ff', bg: '#eef5ff' };
}

export default function CourseVisual({ name, category, variant = 'single' }) {
  if (variant === 'feature') {
    const feature = featureIcons[name] || featureIcons['Industry Trainers'];
    const Icon = feature.Icon;
    return (
      <div className="featureVisual" style={{ '--logo-color': feature.color }}>
        <Icon size={28} />
      </div>
    );
  }

  const stack = popularStacks[name];
  if (variant === 'stack' && stack) {
    return (
      <div className="courseVisual courseVisualStack">
        {stack.map((icon, index) => <LogoTile icon={icon} compact key={`${name}-${index}`} />)}
      </div>
    );
  }

  return (
    <div className="courseVisual">
      <LogoTile icon={iconsByName[name] || resolveFallback(name, category)} />
    </div>
  );
}
