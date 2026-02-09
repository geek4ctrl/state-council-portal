import { Injectable } from '@angular/core';

export type MemberRole = 'president' | 'advisor';
export type RoleFilter = 'all' | MemberRole;

export interface Member {
  name: string;
  title: string;
  email: string;
  image: string;
  role: MemberRole;
  slug: string;
  office: string;
  summary: string;
}

@Injectable({ providedIn: 'root' })
export class MemberService {
  readonly members: Member[] = [
    {
      name: 'KAZADI WALUMBILE',
      title: 'President',
      email: 'kazadi@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'kazadi-walumbile',
      office: 'STATE COUNCIL',
      summary: 'Leads judicial coordination and ensures consistent application of State Council jurisprudence across chambers.'
    },
    {
      name: 'MUKENGELI MUKENGELI',
      title: 'President',
      email: 'mukengeli@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'mukengeli-mukengeli',
      office: 'STATE COUNCIL',
      summary: 'Oversees appellate coordination and guides chamber leadership on procedural standards.'
    },
    {
      name: 'MWANGALWA MUSALI',
      title: 'President',
      email: 'mwangalwa@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'mwangalwa-musali',
      office: 'STATE COUNCIL',
      summary: 'Supports strategic planning and supervises policy alignment across the Court’s divisions.'
    },
    {
      name: 'UBULU MPINGU',
      title: 'President',
      email: 'ubulu@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'ubulu-mpingu',
      office: 'STATE COUNCIL',
      summary: 'Coordinates chamber operations and drives procedural modernization initiatives.'
    },
    {
      name: 'KABEYELE NZEMBELE',
      title: 'President',
      email: 'kabeyele@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'kabeyele-nzembele',
      office: 'STATE COUNCIL',
      summary: 'Guides jurisprudential review and ensures consistency across legal interpretations.'
    },
    {
      name: 'MATHE KYALIRE',
      title: 'President',
      email: 'mathe@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'mathe-kyalire',
      office: 'STATE COUNCIL',
      summary: 'Leads training oversight and supports institutional capacity building.'
    },
    {
      name: 'KOLOMUNA JITSA PASCAL',
      title: 'President',
      email: 'kolomuna@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'kolomuna-jitsa-pascal',
      office: 'STATE COUNCIL',
      summary: 'Oversees chamber quality assurance and jurisprudence harmonization.'
    },
    {
      name: 'BAKINENGAYI BOLOKO',
      title: 'President',
      email: 'bakinengayi@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'bakinengayi-boloko',
      office: 'STATE COUNCIL',
      summary: 'Coordinates outreach with legal stakeholders and ensures protocol adherence.'
    },
    {
      name: 'MASHCI MIPIA TORIISIA',
      title: 'Advisor',
      email: 'mashci@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'mashci-mipia-toriisia',
      office: 'STATE COUNCIL',
      summary: 'Advises on procedural reforms and supports inter-chamber coordination.'
    },
    {
      name: 'IBONIKA NGAMOLO',
      title: 'Advisor',
      email: 'ibonika@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'ibonika-ngamolo',
      office: 'STATE COUNCIL',
      summary: 'Supports policy drafting and provides legal research oversight.'
    },
    {
      name: 'ILUNG TAMIN',
      title: 'Advisor',
      email: 'ilung@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'ilung-tamin',
      office: 'STATE COUNCIL',
      summary: 'Provides strategic guidance on case workflow optimization.'
    },
    {
      name: 'ZAISNE ZINALIBWA',
      title: 'Advisor',
      email: 'zaisne@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'zaisne-zinalibwa',
      office: 'STATE COUNCIL',
      summary: 'Coordinates documentation and knowledge management for court decisions.'
    },
    {
      name: 'OTHUNGU WONGOZI OGYTA',
      title: 'Advisor',
      email: 'othungu@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'othungu-wongozi-ogyta',
      office: 'STATE COUNCIL',
      summary: 'Advises on institutional partnerships and stakeholder engagement.'
    },
    {
      name: 'LOHOTA IITUMBA',
      title: 'Advisor',
      email: 'lohota@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'lohota-iitumba',
      office: 'STATE COUNCIL',
      summary: 'Supports legal analysis for complex cases and advisory opinions.'
    },
    {
      name: 'KALUMBA KAMPATA',
      title: 'Advisor',
      email: 'kalumba@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'kalumba-kampata',
      office: 'STATE COUNCIL',
      summary: 'Focuses on procedural compliance and quality review.'
    },
    {
      name: 'BAKUNGA NGIMBE',
      title: 'Advisor',
      email: 'bakunga@conseildetat.cd',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'bakunga-ngimbe',
      office: 'STATE COUNCIL',
      summary: 'Advises on administrative improvements and service delivery standards.'
    }
  ];

  readonly presidents = this.members.filter((member) => member.role === 'president');
  readonly advisors = this.members.filter((member) => member.role === 'advisor');

  getBySlug(slug: string): Member | null {
    return this.members.find((member) => member.slug === slug) ?? null;
  }
}


