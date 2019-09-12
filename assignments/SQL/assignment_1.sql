CREATE TABLE branch (branch_id serial, name VARCHAR(100),city VARCHAR(100), CONSTRAINT pk_branch PRIMARY KEY (branch_id));

CREATE TABLE customer (customer_id serial, name VARCHAR(100),location VARCHAR(100), CONSTRAINT pk_customer PRIMARY KEY (customer_id));

CREATE TABLE account (account_id serial, customer_id int REFERENCES customer(customer_id), account_type VARCHAR(100), branch_id INT REFERENCES branch(branch_id), CONSTRAINT pk_account PRIMARY KEY (account_id));

CREATE TABLE loan (loan_id serial, account_id INT REFERENCES account(account_id), customer_id INT REFERENCES customer(customer_id), date DATE, amount VARCHAR(100), CONSTRAINT pk_loan PRIMARY KEY(loan_id) );

CREATE TABLE deposit (deposit_id serial, account_id INT REFERENCES account(account_id), customer_id INT REFERENCES customer(customer_id), date DATE, amount VARCHAR(100), CONSTRAINT pk_deposit PRIMARY KEY(deposit_id) );



INSERT INTO branch (name,city) VALUES ('hq PUNE','Pune');
INSERT INTO branch (name,city) VALUES ('Banglore cantt','Banglore');

INSERT INTO customer (name,location) VALUES ('MAYUR','PUNE');
INSERT INTO customer (name,location) VALUES ('ANSAL','Banglore');
INSERT INTO customer (name,location) VALUES ('TEST USER','Banglore');

INSERT INTO account (customer_id,account_type,branch_id) VALUES(1,'saving',1);
INSERT INTO account (customer_id,account_type,branch_id) VALUES(2,'saving',2);
INSERT INTO account (customer_id,account_type,branch_id) VALUES(3,'saving',2);

INSERT INTO loan (account_id,customer_id,date,amount) VALUES (3,3,'2019-09-12',5000);

INSERT INTO deposit (account_id,customer_id,date,amount) VALUES (1,1,'2019-09-12',1000);
INSERT INTO deposit (account_id,customer_id,date,amount) VALUES (2,2,'2019-09-12',1000);
INSERT INTO deposit (account_id,customer_id,date,amount) VALUES (3,3,'2019-09-12',1000);

SELECT * FROM branch;
SELECT * FROM customer;
SELECT * FROM account;
SELECT * FROM loan;
SELECT * FROM deposit;

/* QUERY FOR CUST FROM BANGLORE BRANCH */

SELECT * FROM customer WHERE customer_id IN (SELECT customer_id FROM account WHERE branch_id = (SELECT branch_id FROM branch WHERE city='Banglore'));

/* qUERY FOR CUST HAVING BOTH LOAN AND SAVING(DEPOSIT)*/

SELECT * FROM customer INNER JOIN loan ON (loan.customer_id = customer.customer_id) INNER JOIN deposit ON (deposit.customer_id = customer.customer_id);

