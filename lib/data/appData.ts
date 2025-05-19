interface AppData {
  name: string,
  imagePath: string,
  altText: string,
  linkToApp: string,
}

const roundCube: AppData = {
  name: 'Round Cube',
  imagePath: '/icons_light/roundcube.png',
  altText: 'Round Cube Icon',
  linkToApp: 'https://webmail.mathphys.stura.uni-heidelberg.de/'
}

const wiki: AppData = {
  name: 'Wiki',
  imagePath: '/icons_light/wiki.png',
  altText: 'Wiki Icon',
  linkToApp: 'https://wiki.mathphys.stura.uni-heidelberg.de/'
}


const moozean: AppData = {
  name: 'Moozean',
  imagePath: '/icons_light/moozean.png',
  altText: 'Moozean Icon',
  linkToApp: 'https://moozean.mathphys.stura.uni-heidelberg.de/'
}

const ticketsystem: AppData = {
  name: 'Ticketsystem',
  imagePath: '/icons_light/ticketsystem.png',
  altText: 'Ticketsystem Icon',
  linkToApp: 'https://tickets.mathphys.stura.uni-heidelberg.de/'
}


const notesPublic: AppData = {
  name: 'Notes (public)',
  imagePath: '/icons_light/notes_public.png',
  altText: 'Hedgedoc Icon',
  linkToApp: 'https://hedgedoc.mathphys.info'
}

const passwortmanager: AppData = {
  name: 'Passwörter',
  imagePath: '/icons_light/passwortmanager.png',
  altText: 'Passwortmanager Icon',
  linkToApp: 'https://vaultwarden.mathphys.stura.uni-heidelberg.de/'
}

const stapel: AppData = {
  name: 'Stapel',
  imagePath: '/icons_light/stapel.png',
  altText: 'Stapel Icon',
  linkToApp: 'https://stapel.mathphys.stura.uni-heidelberg.de/'
}

const wordpress: AppData = {
  name: 'Wordpress',
  imagePath: '/icons_light/wordpress.png',
  altText: 'Wordpress Icon',
  linkToApp: 'https://mathphys.stura.uni-heidelberg.de/wp-login.php'
}

const partyverwaltung: AppData = {
  name: 'Partyverwaltung',
  imagePath: '/icons_light/partyverwaltung.png',
  altText: 'Partyverwaltung Icon',
  linkToApp: 'https://partyverwaltung.mathphys.stura.uni-heidelberg.de/'
}

const mailman: AppData = {
  name: 'Mailman',
  imagePath: '/icons_light/mailman.png',
  altText: 'Mailman Icon',
  linkToApp: 'https://mail.mathphys.stura.uni-heidelberg.de/cgi-bin/mailman/listinfo'
}

const nextcloud: AppData = {
  name: 'Nextcloud',
  imagePath: '/icons_light/nextcloud.png',
  altText: 'Nextcloud Icon',
  linkToApp: 'https://nextcloud.mathphys.stura.uni-heidelberg.de/'
}

export const appDataCollection: AppData[]= [roundCube, nextcloud, wiki, moozean, ticketsystem,
 notesPublic, passwortmanager, stapel, wordpress, mailman]

