create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip int,
    img text,
    mortgage decimal,
    rent decimal
)


insert into houses (
    name,
    address,
    city,
    state,
    zip
) values (
    'Bob',
    '123 Street',
    'City',
    'UT',
    12345
);