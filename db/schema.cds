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
        @mandatory
        @title: 'Status Code'
    key ID    : String(2);

        @mandatory
        @title: 'Status Name'
        name  : String(100);
        users : Association to many Users
                    on users.status = $self;
}

entity UserDocuments : managed {
    key ID   : UUID;
        RG   : String(20);
        CPF  : String(11);
        CNPJ : String(14);
}