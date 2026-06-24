import { Title } from '../components/Common';

export default function AdminPage() {
  const menu = ['Dashboard Home', 'Lead Management', 'Curricular Content', 'Article Editor', 'Placement Registry', 'Media Gallery', 'Events', 'Internship Approvals'];
  const leads = [
    ['L-88190', 'Ramesh Jadhav', 'Cloud DevOps', 'FOLLOW-UP'],
    ['L-88191', 'Priya Shinde', 'Data Science', 'CONVERTED'],
    ['L-88192', 'Aarav Patil', 'Full Stack', 'NEW'],
  ];

  return (
    <section className="page">
      <Title title="SW Multimedia Corporate Admin Dashboard" />
      <div className="admin">
        <aside>{menu.map((item) => <button key={item}>{item}</button>)}</aside>
        <div>
          <h2>Live Intake Pipeline</h2>
          <div className="metric"><span>Total Leads: 4,812</span><span>Pending: 214</span><span>Converted: 3,120</span></div>
          <table><tbody>{leads.map((lead) => <tr key={lead[0]}>{lead.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>
          <button>Extract CSV</button>
        </div>
      </div>
    </section>
  );
}
