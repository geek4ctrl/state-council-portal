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
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1773132546/40x50_BOMBOLU_copie.jpg_lj7rdp.jpg',
      role: 'president',
      slug: 'bombulu-bombongo-simon-dieudonne',
      office: 'STATE COUNCIL',
      summary: 'Oversees appellate coordination and guides chamber leadership on procedural standards.'
    },
    {
      name: 'NDALA MUSWAMBA Marie Louise',
      title: 'President',
      email: 'ndala@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'ndala-muswamba-marie-louise',
      office: 'STATE COUNCIL',
      summary: 'Supports strategic planning and supervises policy alignment across the Court’s divisions.'
    },
    {
      name: 'MASANI MATSHI Hippolyte',
      title: 'President',
      email: 'masani@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'masani-matshi-hippolyte',
      office: 'STATE COUNCIL',
      summary: 'Coordinates chamber operations and drives procedural modernization initiatives.'
    },
    {
      name: 'FUNGA MOLIMA MWATA Evariste Prince',
      title: 'President',
      email: 'funga@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'funga-molima-mwata-evariste-prince',
      office: 'STATE COUNCIL',
      summary: 'Guides jurisprudential review and ensures consistency across legal interpretations.'
    },
    {
      name: 'ESAMBO KANGASHE Jean Louis',
      title: 'President',
      email: 'esambo@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'esambo-kangashe-jean-louis',
      office: 'STATE COUNCIL',
      summary: 'Leads training oversight and supports institutional capacity building.'
    },
    {
      name: 'MALENGA MINGA Modeste',
      title: 'President',
      email: 'malenga@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776204246/MALENGA_40x50.jpg_yyuzl3.jpg',
      role: 'president',
      slug: 'malenga-minga-modeste',
      office: 'STATE COUNCIL',
      summary: 'Oversees chamber quality assurance and jurisprudence harmonization.'
    },
    {
      name: 'ABDALA MBOKAMIBA Remy',
      title: 'President',
      email: 'abdala@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776599568/PRES_ABDALA_MBOKAMIBA_REMY_copie.jpg_1_ywkylj.jpg',
      role: 'president',
      slug: 'abdala-mbokamiba-remy',
      office: 'STATE COUNCIL',
      summary: 'Coordinates outreach with legal stakeholders and ensures protocol adherence.'
    },
    {
      name: 'KIBWE MUTER Eugène',
      title: 'President',
      email: 'kibwe@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'kibwe-muter-eugene',
      office: 'STATE COUNCIL',
      summary: 'Supports appellate governance and strengthens cross-chamber institutional coordination.'
    },
    {
      name: 'BULAMBO BAKONGA Beniamin',
      title: 'President',
      email: 'bulambo@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'president',
      slug: 'bulambo-bakonga-beniamin',
      office: 'STATE COUNCIL',
      summary: 'Drives chamber-level governance and contributes to procedural consistency across matters.'
    },
    {
      name: 'TSHIBOLA BIDILUKINI Antoine',
      title: 'Advisor',
      email: 'tshibola@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776601097/CONS_TSHIBOLA_BIDILUKINI_ANTOINE_copie.jpg_1_spfgik.jpg',
      role: 'advisor',
      slug: 'tshibola-bidilukini-antoine',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KAHUNGU ZAMBA Félix',
      title: 'Advisor',
      email: 'kahungu@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1773133094/KAHUNGU_30x40_copie22.jpg_dra7jd.jpg',
      role: 'advisor',
      slug: 'kahungu-zamba-felix',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'BAHATI MAIMOTO Roger',
      title: 'Advisor',
      email: 'bahati@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776204001/CONSEILLER_BAHATI_MAIMOTO_ROGER.jpg_fjvwlv.jpg',
      role: 'advisor',
      slug: 'bahati-maimoto-roger',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'SIBU MATUBUKA René',
      title: 'Advisor',
      email: 'sibu@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'sibu-matubuka-rene',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'CAKWANGASHA KABWENGA Jean-Pierre',
      title: 'Advisor',
      email: 'cakwangasha@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'cakwangasha-kabwenga-jean-pierre',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'AYANGASOBE BAMBABALE Blaise',
      title: 'Advisor',
      email: 'ayangasobe@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776203827/AYANGASOBE_BAMBALE_Blaise.jpg_jatkje.jpg',
      role: 'advisor',
      slug: 'ayangasobe-bambabale-blaise',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KITENGE NDIBU John',
      title: 'Advisor',
      email: 'kitenge@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'kitenge-ndibu-john',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'BADIBANGA ILUNGA Jean',
      title: 'Advisor',
      email: 'badibanga@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'badibanga-ilunga-jean',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KWEYI BISEMBO ASINGA Fulgence',
      title: 'Advisor',
      email: 'kweyi@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'kweyi-bisembo-asinga-fulgence',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KANZA MAKOKA Joseph',
      title: 'Advisor',
      email: 'kanza@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'kanza-makoka-joseph',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KATAMBE MALIPO Gérard',
      title: 'Advisor',
      email: 'katambe@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1773133247/40x50.jpg_guvc1v.jpg',
      role: 'advisor',
      slug: 'katambe-malipo-gerard',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'LEMBLEMBE N\'KASCHAMA Guérin Emmanuel',
      title: 'Advisor',
      email: 'lemblembe@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776600547/CONS_LEMBELEMBE_copie.jpg_1_ttyqir.jpg',
      role: 'advisor',
      slug: 'lemblembe-n-kaschama-guerin-emmanuel',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'LUSHULE BASHOMEKA Déogratias',
      title: 'Advisor',
      email: 'lushule@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776600405/CONS._LUSHULE_BASHOMEKA_DEO_copie.jpg_1_vfnzwa.jpg',
      role: 'advisor',
      slug: 'lushule-bashomeka-deogratias',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'MAYENGO LUZIMBUKI Aimé',
      title: 'Advisor',
      email: 'mayengo@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776599990/CONS._MAYENGO_LUZIMU_copie.jpg_1_iykqh8.jpg',
      role: 'advisor',
      slug: 'mayengo-luzimbuki-aime',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'Mme MONGU NKANGA Marie-Louise',
      title: 'Advisor',
      email: 'mongu@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'mme-mongu-nkanga-marie-louise',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'MUDINDAMBI NAWENA Julien',
      title: 'Advisor',
      email: 'mudindambi@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776597596/CONS._MUDINDAMBI_NAWENA_JULIEN.jpg_1_vzzcbk.jpg',
      role: 'advisor',
      slug: 'mudindambi-nawena-julien',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KOURA MFUMANKIE Emmanuel',
      title: 'Advisor',
      email: 'koura@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1773133441/40x50_copie.jpg_gs0g6x.jpg',
      role: 'advisor',
      slug: 'koura-mfumankie-emmanuel',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'NTUMBA MUSUKA Zacharie',
      title: 'Advisor',
      email: 'ntumba.musuka@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'ntumba-musuka-zacharie',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'NTUMBA MANDE Enoch',
      title: 'Advisor',
      email: 'ntumba.mande@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'ntumba-mande-enoch',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'WANE BAMEME Bienvenu',
      title: 'Advisor',
      email: 'wane@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776600744/CONS._WANE_BAMEME_BIENVENU.jpg_1_esxchc.jpg',
      role: 'advisor',
      slug: 'wane-bameme-bienvenu',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'YAMULAMBA KASONGO Godefroid',
      title: 'Advisor',
      email: 'yamulamba@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'yamulamba-kasongo-godefroid',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'MVUEKIANI NDONZUA Alexis',
      title: 'Advisor',
      email: 'mvuekiani@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776602356/CONS._MVUEKIANI_NDONZUAU_ALEXIX.jpg_1_xk74ak.jpg',
      role: 'advisor',
      slug: 'mvuekiani-ndonzua-alexis',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'TABALA KITENE Faustin',
      title: 'Advisor',
      email: 'tabala@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'tabala-kitene-faustin',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'MUSEMA KAWATA Achille',
      title: 'Advisor',
      email: 'musema@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776602713/CONSEILLER_MUSEMA_KAWATA_ACHILLE.jpg_1_ejb0n4.jpg',
      role: 'advisor',
      slug: 'musema-kawata-achille',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'MUNEKAYI CTTOKO Honoré',
      title: 'Advisor',
      email: 'munekayi@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'munekayi-cttoko-honore',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'Mme IBA MAYA Sophie',
      title: 'Advisor',
      email: 'iba.maya@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776602978/CONSEILLERE_IBA_MAYA_SOPHIE_copie.jpg_1_fdffz5.jpg',
      role: 'advisor',
      slug: 'mme-iba-maya-sophie',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'Mme KULULU NSUNGU Philomène',
      title: 'Advisor',
      email: 'kululu@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776603981/Sans_titre-1.jpg_1_ecrqog.jpg',
      role: 'advisor',
      slug: 'mme-kululu-nsungu-philomene',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KAKUDJI WA KAKUDJI',
      title: 'Advisor',
      email: 'kakudji@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'kakudji-wa-kakudji',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'DJONGESONGO OHUMAHUMA Gaston',
      title: 'Advisor',
      email: 'djongesongo@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776204074/CONS_DJONGESONGE..jpg_pgcxyr.jpg',
      role: 'advisor',
      slug: 'djongesongo-ohumahuma-gaston',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'SOKO MABIALA',
      title: 'Advisor',
      email: 'soko@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776601461/CONS_SOKO_MABIALA.jpg_1_eu4dig.jpg',
      role: 'advisor',
      slug: 'soko-mabiala',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'Mme KATALA MATADI Lysette',
      title: 'Advisor',
      email: 'katala@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'mme-katala-matadi-lysette',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'Mme LUVANGU NKENGE Thérèse',
      title: 'Advisor',
      email: 'luvangu@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'mme-luvangu-nkenge-therese',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'EKABELA MUNDONGYA Ruphin',
      title: 'Advisor',
      email: 'ekabela@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775670049/vecteezy_user-profile-vector-flat-illustration-avatar-person-icon_37336395_ukit5u.jpg',
      role: 'advisor',
      slug: 'ekabela-mundongya-ruphin',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    },
    {
      name: 'KITWA NDALAMBA Arthur',
      title: 'Advisor',
      email: 'kitwa@conseildetatrdc.com',
      image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1776601806/CONS._KITWA_NDALAMBA_ARTHUR.jpg_1_mcuwot.jpg',
      role: 'advisor',
      slug: 'kitwa-ndalamba-arthur',
      office: 'STATE COUNCIL',
      summary: 'Provides advisory support on administrative and judicial matters.'
    }
  ];

  readonly presidents = this.members.filter((member) => member.role === 'president');
  readonly advisors = this.members.filter((member) => member.role === 'advisor');

  getBySlug(slug: string): Member | null {
    return this.members.find((member) => member.slug === slug) ?? null;
  }
}


