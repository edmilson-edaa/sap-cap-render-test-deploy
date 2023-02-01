using {ein.codes.bank as my} from '../db/schema';

service UserAdminService {
    entity Users         as projection on my.Users;
    entity UserStatus    as projection on my.UserStatus;
    entity UserDocuments as projection on my.UserDocuments;
}
