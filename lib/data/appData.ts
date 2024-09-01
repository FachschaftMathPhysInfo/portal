interface AppData {
  name: string,
  imagePath: string,
  altText: string,
  linkToApp: string,
}

const roundCube: AppData = {
  name: 'Round Cube',
  imagePath: '/icons_light/roundcube',
  altText: 'Round Cube Icon',
  linkToApp: 'https://webmail.mathphys.stura.uni-heidelberg.de/'
}

const wiki: AppData = {
  name: 'Wiki',
  imagePath: '/icons_light/wiki',
  altText: 'Wiki Icon',
  linkToApp: 'https://wiki.mathphys.stura.uni-heidelberg.de/'
}

const sumpf: AppData = {
  name: 'Sumpf',
  imagePath: '/icons_light/sumpf',
  altText: 'Sumpf Icon',
  linkToApp: 'https://svn.mathphys.stura.uni-heidelberg.de/sumpf/'
}

const moozean: AppData = {
  name: 'Moozean',
  imagePath: '/icons_light/moozean',
  altText: 'Moozean Icon',
  linkToApp: 'https://moozean.mathphys.stura.uni-heidelberg.de/'
}

const ticketsystem: AppData = {
  name: 'Ticketsystem',
  imagePath: '/icons_light/ticketsystem',
  altText: 'Ticketsystem Icon',
  linkToApp: 'https://tickets.mathphys.info/'
}

const notesIntern: AppData = {
  name: 'Notes (intern)',
  imagePath: '/icons_light/hedgedoc_public.png',
  altText: 'Hedgedoc Icon',
  linkToApp: 'https://tickets.mathphys.info/'
}

const notesPublic: AppData = {
  name: 'Notes (public)',
  imagePath: '/icons_light/hedgedoc_public',
  altText: 'Hedgedoc Icon',
  linkToApp: 'https://tickets.mathphys.info/'
}

const passwortmanager: AppData = {
  name: 'Passwortmanager',
  imagePath: '/icons_light/passwortmanager',
  altText: 'Passwortmanager Icon',
  linkToApp: 'https://vaultwarden.mathphys.info/'
}

const stapel: AppData = {
  name: 'Stapel',
  imagePath: '/icons_light/stapel',
  altText: 'Stapel Icon',
  linkToApp: 'https://stapel.mathphys.info/'
}

const wordpress: AppData = {
  name: 'Wordpress',
  imagePath: '/icons_light/wordpress',
  altText: 'Wordpress Icon',
  linkToApp: 'https://mathphys.stura.uni-heidelberg.de/w/wp-login.php'
}

const partyverwaltung: AppData = {
  name: 'Partyverwaltung',
  imagePath: '/icons_light/partyverwaltung',
  altText: 'Partyverwaltung Icon',
  linkToApp: 'https://partyverwaltung.mathphys.stura.uni-heidelberg.de/'
}

const mailman: AppData = {
  name: 'Mailman',
  imagePath: '/icons_light/mailman',
  altText: 'Mailman Icon',
  linkToApp: 'https://mail.mathphys.stura.uni-heidelberg.de/cgi-bin/mailman/listinfo'
}

export const appDataCollection: AppData[]= [roundCube, wiki, sumpf, moozean, ticketsystem,
  notesIntern, notesPublic, passwortmanager, stapel, wordpress, partyverwaltung, mailman]

