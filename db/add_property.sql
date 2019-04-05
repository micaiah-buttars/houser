insert into houses(
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) values (
    $1,
    $2,
    $3,
    $4,
    $5::integer,
    $6,
    $7::integer,
    $8::integer
);