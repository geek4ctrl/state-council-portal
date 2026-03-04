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
      name: 'NSENSELE WA NSENSELE Brigitte',
      title: 'President',
      email: 'nsensele@conseildetatrdc.com',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg',
      role: 'president',
      slug: 'nsensele-wa-nsensele-brigitte',
      office: 'STATE COUNCIL',
      summary: 'Leads judicial coordination and ensures consistent application of State Council jurisprudence across chambers.'
    },
    {
      name: 'BOMBULU BOMBONGO Simon Dieudonné',
      title: 'President',
      email: 'bombulu@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1518809595274-1471d16319b7?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'bombulu-bombongo-simon-dieudonne',
      office: 'STATE COUNCIL',
      summary: 'Oversees appellate coordination and guides chamber leadership on procedural standards.'
    },
    {
      name: 'NDALA MUSWAMBA Marie Louise',
      title: 'President',
      email: 'ndala@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'ndala-muswamba-marie-louise',
      office: 'STATE COUNCIL',
      summary: 'Supports strategic planning and supervises policy alignment across the Court’s divisions.'
    },
    {
      name: 'MASANI MATSHI Hippolyte',
      title: 'President',
      email: 'masani@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'masani-matshi-hippolyte',
      office: 'STATE COUNCIL',
      summary: 'Coordinates chamber operations and drives procedural modernization initiatives.'
    },
    {
      name: 'FUNGA MOLIMA MWATA Evariste Prince',
      title: 'President',
      email: 'funga@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'funga-molima-mwata-evariste-prince',
      office: 'STATE COUNCIL',
      summary: 'Guides jurisprudential review and ensures consistency across legal interpretations.'
    },
    {
      name: 'ESAMBO KANGASHE Jean Louis',
      title: 'President',
      email: 'esambo@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'esambo-kangashe-jean-louis',
      office: 'STATE COUNCIL',
      summary: 'Leads training oversight and supports institutional capacity building.'
    },
    {
      name: 'MALENGA MINGA Modeste',
      title: 'President',
      email: 'malenga@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'malenga-minga-modeste',
      office: 'STATE COUNCIL',
      summary: 'Oversees chamber quality assurance and jurisprudence harmonization.'
    },
    {
      name: 'ABDALA MBOKAMIBA Remy',
      title: 'President',
      email: 'abdala@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'abdala-mbokamiba-remy',
      office: 'STATE COUNCIL',
      summary: 'Coordinates outreach with legal stakeholders and ensures protocol adherence.'
    },
    {
      name: 'KIBWE MUTER Eugène',
      title: 'President',
      email: 'kibwe@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1666867936058-de34bfd5b320?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'kibwe-muter-eugene',
      office: 'STATE COUNCIL',
      summary: 'Supports appellate governance and strengthens cross-chamber institutional coordination.'
    },
    {
      name: 'BULAMBO BAKONGA Beniamin',
      title: 'President',
      email: 'bulambo@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=350&fit=crop',
      role: 'president',
      slug: 'bulambo-bakonga-beniamin',
      office: 'STATE COUNCIL',
      summary: 'Drives chamber-level governance and contributes to procedural consistency across matters.'
    },
    {
      name: 'ILUNG TAMIN',
      title: 'Advisor',
      email: 'ilung@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'ilung-tamin',
      office: 'STATE COUNCIL',
      summary: 'Provides strategic guidance on case workflow optimization.'
    },
    {
      name: 'ZAISNE ZINALIBWA',
      title: 'Advisor',
      email: 'zaisne@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'zaisne-zinalibwa',
      office: 'STATE COUNCIL',
      summary: 'Coordinates documentation and knowledge management for court decisions.'
    },
    {
      name: 'OTHUNGU WONGOZI OGYTA',
      title: 'Advisor',
      email: 'othungu@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'othungu-wongozi-ogyta',
      office: 'STATE COUNCIL',
      summary: 'Advises on institutional partnerships and stakeholder engagement.'
    },
    {
      name: 'LOHOTA IITUMBA',
      title: 'Advisor',
      email: 'lohota@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1592520113018-180c8bc831c9?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'lohota-iitumba',
      office: 'STATE COUNCIL',
      summary: 'Supports legal analysis for complex cases and advisory opinions.'
    },
    {
      name: 'KALUMBA KAMPATA',
      title: 'Advisor',
      email: 'kalumba@conseildetatrdc.com',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=350&fit=crop',
      role: 'advisor',
      slug: 'kalumba-kampata',
      office: 'STATE COUNCIL',
      summary: 'Focuses on procedural compliance and quality review.'
    },
    {
      name: 'BAKUNGA NGIMBE',
      title: 'Advisor',
      email: 'bakunga@conseildetatrdc.com',
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


