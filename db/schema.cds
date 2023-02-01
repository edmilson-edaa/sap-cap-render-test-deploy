using {
    Country,
    managed
} from '@sap/cds/common';

namespace ein.codes.bank;

entity Users : managed {
    key ID        : UUID;
        firstName : String(100);
        lastName  : String(200);
        status    : Association to UserStatus;
        document  : Association to UserDocuments;
}

entity UserStatus : managed {
    key ID    : Integer;
        name  : String(100);
        users : Association to many Users
                    on users.status = $self;
}

entity UserDocuments : managed {
    key ID   : Integer;
        RG   : String(20);
        CPF  : String(11);
        CNPJ : String(14);
        user : Association to Users
                   on user.document = $self;
}