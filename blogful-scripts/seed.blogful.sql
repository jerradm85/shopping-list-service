BEGIN;

INSERT INTO shopping_list (title, date_published, content)
VALUES
    -- ('Fish tricks', 13.10, 'Main',              false,  now() - '21 days'::INTERVAL)
    ('Jim goes to school', 'now() - '21 days'::INTERVAL', 'He learned about math.')
    ('Jim goes to the park', 'now() - '14 days'::INTERVAL', 'He fell off his skateboard.')
    ('Jim goes to the store', 'now() - '12 days'::INTERVAL', 'He bought eggs and bacon.')
    ('Jim goes to church', 'now() - '20 days'::INTERVAL', 'He sat in the front.')
    ('Jim goes to France', 'now() - '5 days'::INTERVAL', 'And ate authentic french fries.')
    ('Jim goes to Thinkful', 'now() - '10 days'::INTERVAL', 'He checks in with his mentor.')
    ('Jim goes to get gas', 'now() - '11 days'::INTERVAL', 'But he does not have a car.')
    ('Jim goes home', 'now() - '1 days'::INTERVAL', 'And watches American-Ninja-Warrior')
    ('Jim goes to Mars', 'now() - '9 days'::INTERVAL', 'He can''t find any chocolate.')
    ('Jim goes to Venus', 'now() - '15 days'::INTERVAL', 'His legs are much smoother.')

    ('Jim goes to Disneyland', 'now() - '2 days'::INTERVAL', 'He met Donald Duck.')
    ('Jim goes to Dinner', 'now() - '19 days'::INTERVAL', 'He orders a chicken salad.')
    ('Jim goes to the dog park', 'now() - '16 days'::INTERVAL', 'He picks up a dog. the owner is mad.')
    ('Jim goes to Jail', 'now() - '6 days'::INTERVAL', 'For grand theft canine.')
    ('Jim goes to Court', 'now() - '17 days'::INTERVAL', 'They were barking up the wrong tree.')
    ('Jim goes to the Laundromat', 'now() - '19 days'::INTERVAL', 'He cleans money for the mob.')
    ('Jim goes to get up', 'now() - '18 days'::INTERVAL', 'But he is too tired, so he stays put.')
    ('Jim goes to buy food', 'now() - '4 days'::INTERVAL', 'He gets milk, eggs, bread and cheese.')
    ('Jim goes crazy', 'now() - '13 days'::INTERVAL', 'He just cant sleep.')
    ('Jim goes back to the drawing board', 'now() - '15 days'::INTERVAL', 'He really likes art.')

;

COMMIT;