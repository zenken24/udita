let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let resultBtn = document.getElementById("result");
let quoteDisplay = document.getElementById("quote");

let currentRotation = 0; // Start with an initial rotation value
let segments = [
    "Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation",
    "Lover", "Folkore", "Evermore", "Midnights", "The Tortured Poets Dept", "bonus"
];

// Quotes corresponding to each segment
let quotes = [
    // Quotes for "Taylor Swift"
    [
        "Someday you'll turn your radio on; I hope it takes you back to that place; When you think happiness; I hope you think that little black dress; Think of my head on your chest; And my old faded blue jeans",
        "I hope you think of me",
        "I realize you love yourself more than you could ever love me; So go and tell your friends that I'm obsessive and crazy",
        "And there he goes, so perfectly; The kind of flawless I wish I could be",
        "He's the song in the car I keep singing, don't know why I do; He's the time taken up, but there's never enough; And he's all that I need to fall into",
        "I don't know what I want; So don't ask me",
        "I'm just walking; Trying to see through the rain coming down; Even though I'm not the only one, who feels the way I do",
        "I'm alone, on my own; And that's all I know ;I'll be strong, I'll be wrong; Oh, but life goes on",
        "Maybe I'm just a girl on a mission; But I'm ready to fly",
        "And now that I'm sittin' here thinkin' it through; I've never been anywhere cold as you",
        "You put up the walls and paint them all a shade of gray; And I stood there loving you, and wished them all away",
        "Seems the only one who doesn't see your beauty; Is the face in the mirror looking back at you; You walk around here thinking you're not pretty; But that's not true 'cause I know you",
        "You're beautiful; Every little piece, love don't you know?",
        "If you and I are a story; That never gets told; If what you are is a daydream; I'll never get to hold, at least you'll know",
        "And when you find everything you've looked for; I hope your love leads you back to my front door",
        "And I was right there beside him all summer long. And then the time we woke up to find that summer gone",
        "You have a way of coming easily to me; And when you take, you take the very best of me; So I start a fight 'cause I need to feel somethin'"
    ],
    // Quotes for "Fearless"
    [
        "And I don't know why; But with you I'd dance in a storm; In my best dress; Fearless",
        "It's your freshman year; And you're gonna be here for the next four years; In this town",
        "Well, count to ten; Take it in; This is life before you know who you're gonna be",
        "But I've found time can heal most anything; And you just might find who you're supposed to be",
        "I'm tryin' so hard not to get caught up now; But you're just so cool",
        "We were both young when I first saw you; I close my eyes and the flashback starts; I'm standin' there; On a balcony in summer air",
        "Of all the girls tossing rocks at your window; I'll be the one waiting there even when it's cold; Hey Stephen, boy, you might have me believing; I don't always have to be alone",
        "Hey Stephen, why are people always leaving?; I think you and I should stay the same",
        "If you could see that I'm the one who understands you; Been here all along, so why can't you see?; You belong with me",
        "You tell me that you love me, then you cut me down; And I need you like a heartbeat",
        "You don't have to call anymore; I won't pick up the phone; This is the last straw",
        "And it's 2 a.m. and I'm cursing your name; So in love that you act insane; And that's the way I loved you; Breaking down and coming undone; it's a roller coaster kind of rush; And I never knew I could feel that much; And that's the way I loved you",
        "I don't know why all the trees change in the fall; But I know you're not scared of anything at all; Don't know if Snow White's house is near or far away; But I know I had the best day with you today",
        "I don't know who I'm gonna talk to now at school; But I know I'm laughing; On the car ride home with you; Don't know how long it's gonna take to feel okay; But I know I had the best day with you today",
        "These walls that they put up to hold us back will fall down; It's a revolution, the time will come; For us to finally win; And we'll sing hallelujah, we'll sing hallelujah"
    ],
    // Quotes for "Speak Now"
    [
        "You made a rebel of a careless man's careful daughter; You are the best thing that's ever been mine",
        "'Cause I see sparks fly, whenever you smile",
        "So this is me swallowin' my pride; Standin' in front of you sayin' I'm sorry for that night",
        "And then the cold came, the dark days; When fear crept into my mind; You gave me all your love and all I gave you was goodbye",
        "I'd go back in time and change it, but I can't; So if the chain is on your door, I understand",
        "I used to know my place was a spot next to you",
        "It's alright, just wait and see; Your string of lights is still bright to me",
        "Lost your balance on a tightrope, oh; It's never too late to get it back",
        "I'll spend forever wondering if you knew; I was enchanted to meet you",
        "My thoughts will echo your name, until I see you again",
        "Your name, forever the name on my lips",
        "Long live the walls we crashed through; How the kingdom lights shined just for me and you; I was screaming, Long live all the magic we made"
    ],
    // Quotes for "Red"
    [
        "So you were never a saint; And I've loved in shades of wrong",
        "But moving on from him is impossible; When I still see it all in my head; In burning red; Burning, it was red",
        "Your name has echoed through my mind; And I just think you should, think you should know",
        "I knew you were trouble when you walked in; So shame on me now",
        "And there we are again when nobody had to know; You kept me like a secret, but I kept you like an oath; Sacred prayer and we'd swear; To remember it all too well, yeah",
        "It was rare, I was there; I remember it all too well",
        "It feels like a perfect night; For breakfast at midnight",
        "We're happy, free, confused and lonely at the same time; It's miserable and magical, oh, yeah; Tonight's the night when we forget about the deadlines",
        "Everything will be alright if; We just keep dancing like we're; Twenty-two, twenty-two",
        "I bet; This time of night you're still up; I bet; You're tired from a long hard week; I bet; You're sittin' in your chair by the window; Looking out at the city; And I hope; Sometimes you wonder 'bout me",
        "I'm pretty sure we almost broke up last night; I threw my phone across the room at you; I was expecting some dramatic turn away; But you stayed",
        "I've been loving you for quite some time, time, time; You think that it's funny when I'm mad, mad, mad; But I think that it's best if we both stay",
        "You took the time to memorize me; My fears, my hopes and dreams; I just like hanging out with you; All the time; All those times that you didn't leave; It's been occurring to me; I'd like to hang out with you; For my whole life",
        "I imagine you are home; In your room, all alone; And you open your eyes into mine; And everything feels better",
        "This is the last time I'm asking you this; Put my name at the top of your list; This is the last time I'm asking you why; You break my heart in the blink of an eye, eye, eye",
        "You wear your best apology; But I was there to watch you leave; And all the times I let you in; Just for you to go again; Disappear when you come back; Everything is better",
        "Tonight I'm gonna dance; For all that we've been through; But I don't wanna dance; If I'm not dancing with you",
        "Words, how little they mean; When you're a little too late",
        "Distance, timing; Breakdown, fighting; Silence, the train runs off its tracks; Kiss me, try to fix it; Could you just try to listen?; Hang up, give up; For the life of us we can't get back",
        "'Cause all I know is we said, 'Hello'; And your eyes look like comin' home",
        "He said, 'Look at you, worrying so much about things you can't change; You'll spend your whole life singing the blues; If you keep thinking that way'; He was tryna to skip rocks on the ocean saying to me; 'Don't you see the starlight, starlight; Don't you dream impossible things'",
        "Walked in expecting you'd be late; But you got here early and you stand and wave; I walk to you",

    ],
    // Quotes for "1989"
    [
        "And I should just tell you to leave 'cause I; Know exactly where it leads, but I; Watch us go 'round and 'round each time",
        "And when we go crashing down, we come back every time; 'Cause we never go out of style, we never go out of style",
        "Remember when you hit the brakes too soon?; Twenty stitches in a hospital room; When you started crying, baby I did too; But when the sun came up I was looking at you; Remember when we couldn't take the heat?; I walked out, I said, 'I'm setting you free'; But the monsters turned out to be just trees; When the sun came up you were looking at me",
        "Hey, all you had to do was stay; Had me in the palm of your hand; Then why'd you have to go and lock me out when I let you in?",
        "I stay out too late; Got nothing in my brain; That's what people say, mm-mm",
        "I wish you would come back; Wish I'd never hung up the phone like I did; I wish you knew that; I'd never forget you as long as I'd live",
        "You always knew how to push my buttons (I I I I, I I I wish, I wish, I); You gave me everything and nothing (I I I I, I I I wish, I wish, I); This mad, mad love makes you come rushing",
        "Did you think we'd be fine?; Still got scars on my back from your knife; So don't think it's in the past; These kind of wounds they last and they last; Now did you think it all through?; All these things will catch up to you; And time can heal, but this won't",
        "Band-aids don't fix bullet holes (hey!); You say sorry just for show (hey!); If you live like that, you live with ghosts (hey!); Hm, if you love like that, blood runs cold",
        "Say you'll remember me; Standing in a nice dress; Staring at the sunset, babe; Red lips and rosy cheeks; Say you'll see me again; Even if it's just pretend",
        "And then you say; I want you for worse or for better; I would wait for ever and ever; Broke your heart, I'll put it back together; I would wait for ever and ever",
        "Tossing, turning; Struggled through the night with someone new; And I could go on and on, on and on; Lantern, burning; Flickered in the night, only you; But you were still gone, gone, gone; In losing grip, On sinking ships; You showed up just in time",
        "When you're young, you just run; But you come back to what you need",
        "and you know for me, it's always you; I know places; (I) in the dead of night, your eyes so green; I know places; (Hide) and I know for you, it's always me; I know places",
        "You can hear it in the silence, silence, you ;You can feel it on the way home, way home, you; You can see it with the lights out, lights out; You are in love, true love; You are in love",
        "We're all bored; We're all so tired of everything; We wait for trains that just aren't coming; We show off our different scarlet letters; Trust me, mine is better",
        "Baby, we're the new romantics; Come on, come along with me; Heartbreak is the national anthem; We sing it proudly; We are too busy dancing; To get knocked off our feet; Baby, we're the new romantics; The best people in life are free",
    ],
    // Quotes for "Reputation"
    [
        "Every love I've known in comparison is a failure; I forget their names now, I'm so very tame now; Never be the same now, now",
        "I wanna be your endgame; I wanna be your first string; I wanna be your A-Team (whoa-whoa, whoa); I wanna be your endgame, endgame",
        "Knew her when I was young; Reconnected when we were little bit older",
        "I swear I don't love the drama, it loves me; And I can't let you go, your handprint's on my soul; It's like your eyes are liquor, it's like your body is gold; You've been calling my bluff on all my usual tricks; So here's the truth from my red lips",
        "Don't blame me, love made me crazy; If it doesn't, you ain't doin' it right; Lord, save me, my drug is my baby; I'll be usin' for the rest of my life",
        "For you, I would cross the line; I would waste my time; I would lose my mind; They say, 'She's gone too far this time'",
        "And baby, for you, I (I) would (would) fall from grace; Just (just) to (to) touch your face; If (if) you (you) walk away; I'd beg you on my knees to stay",
        "I get so high, oh; Every time you're, every time you're lovin' me; You're lovin' me; Trip of my life, oh",
        "Is it cool that I said all that?; Is it chill that you're in my head?; 'Cause I know that it's delicate",
        "Sometimes I wonder, when you sleep; Are you ever dreaming of me?; Sometimes when I look into your eyes; I pretend you're mine all the damn time",
        "I'm sorry; But the old Taylor can't come to the phone right now; Why? Oh, 'cause she's dead (oh)",
        "I don't trust nobody and nobody trusts me; I'll be the actress starring in your bad dreams",
        "I make all your gray days clear and; Wear you like a necklace; I'm so chill, but you make me jealous; But I got your heart; Skipping, skipping when I'm gone",
        "You should take it as a compliment; That I got drunk and made fun of the way you talk; You should think about the consequence; Of your magnetic field being a little too strong",
        "Whisky on ice, Sunset and Vine; You've ruined my life, by not being mine",
        "You're so gorgeous; I can't say anything to your face; 'Cause look at your face (gorgeous); And I'm so furious; At you for making me feel this way; But what can I say?; You're gorgeous",
        "You make me so happy, it turns back to sad, yeah; There's nothing I hate more than what I can't have",
        "I'm in a getaway car; I left you in a motel bar; Put the money in a bag and I stole the keys; That was the last time you ever saw me (oh!)",
        "I'm perfectly fine, I live on my own; I made up my mind, I'm better off bein' alone",
        "Late in the night, the city's asleep; Your love is a secret I'm hoping, dreaming, dying to keep; Change my priorities; The taste of your lips is my idea of luxury",
        "Say you fancy me, not fancy stuff; Baby, all at once, this is enough",
        "I, I loved you in secret; First sight, yeah, we love without reason",
        "My, my love had been frozen; Deep blue, but you painted me golden",
        "I could've spent forever with your hands in my pockets; Picture of your face in an invisible locket; You said there was nothing in the world that could stop it; I had a bad feeling",
        "But we were dancing; Dancing with our hands tied, hands tied",
        "Our secret moments in your crowded room; They got no idea about me and you",
        "Say my name and everything just stops; I don't want you like a best friend; Only bought this dress so you could take it off; Take it off",
        "Even in my worst times; You could see the best of me; Flashback to my mistakes; My rebounds, my earthquakes; Even in my worst lies; You saw the truth in me; And I woke up just in time; Now I wake up by your side; My one and only, my lifeline",
        "I want to wear his initial; On a chain 'round my neck, chain 'round my neck; Not because he owns me; But 'cause he really knows me; Which is more than they can say",
        "I recall late November; Holdin' my breath, slowly I said; 'You don't need to save me; But would you run away with me?'",
        "Hold on to the memories; They will hold on to you; And I will hold on to you",
        "Please don't ever become a stranger; Whose laugh I could recognize anywhere",
    ],
    // Quotes for "Lover"
    [
    "I'm drunk in the back of the car; And I cried like a baby coming home from the bar (oh); Said, 'I'm fine, ' but it wasn't true; I don't wanna keep secrets just to keep you",
    "And I snuck in through the garden gate; Every night that summer just to seal my fate (oh); And I screamed for whatever it's worth; 'I love you, ' ain't that the worst thing you ever heard?; He looks up grinning like a devil",
    "Can I go where you go?; Can we always be this close forever and ever?; And ah, take me out, and take me home; You're my, my, my, my; Lover",
    "And I'm highly suspicious that everyone who sees you wants you; I've loved you seven summers now, honey, but I want 'em all",
    "Ladies and gentlemen, will you please stand?; With every guitar string scar on my hand; I take this magnetic force of a man to be my lover",
    "My heart's been borrowed and yours has been blue; All's well that ends well to end up with you; Swear to be overdramatic and true to my lover",
    "And you'll save all your dirtiest jokes for me; And at every table, I'll save you a seat, lover",
    "I'm so sick of running as fast as I can; Wondering if I'd get there quicker; If I was a man; And I'm so sick of them coming at me again; 'Cause if I was a man; Then I'd be the man",
    "Combat, I'm ready for combat; I say I don't want that, but what if I do?; 'Cause cruelty wins in the movies; I've got a hundred thrown-out speeches I almost said to you",
    "I've been the archer; I've been the prey; Who could ever leave me, darling?; But who could stay?",
    "Who could stay?; You could stay; You",
    "He got my heartbeat; Skipping down 16th Avenue; Got that, oh! I mean; Wanna see what's under that attitude; Like, I want you, bless my soul; And I ain't gotta tell him; I think he knows",
    "Lyrical smile, indigo eyes, hand on my thigh; We can follow the sparks, I'll drive",
    "You know I adore you, I'm crazier for you",
    "It's been a long time coming, but; It's you and me, that's my whole world",
    "Kiss me once 'cause you know I had a long night; (Oh) Kiss me twice 'cause it's gonna be alright; Three times 'cause I've waited my whole life",
    "I like shiny things, but I'd marry you with paper rings; Uh huh, that's right; Darling, you're the one I want, and; I hate accidents except when we went from friends to this",
    "In the winter, in the icy outdoor pool; When you jumped in first, I went in too; I'm with you even if it makes me blue",
    "I want to drive away with you; I want your complications too; I want your dreary Mondays",
    "We were a fresh page on the desk; Filling in the blanks as we go; As if the street lights pointed in an arrowhead; Leading us home",
    "And I hope I never lose you, hope it never ends; I'd never walk Cornelia Street again; That's the kind of heartbreak time could never mend; I'd never walk Cornelia Street again",
    "And baby, I'm so terrified of if you ever walk away; I'd never walk Cornelia Street again",
    "I don't wanna lose you, hope it never ends; I'd never walk Cornelia Street again",
    "Saying goodbye is death by a thousand cuts; Flashbacks waking me up; I get drunk, but it's not enough; 'Cause the morning comes and you're not my baby",
    "I ask the traffic lights if it'll be all right; They say, 'I don't know'",
    "You said it was a great love; One for the ages; But if the story's over; Why am I still writing pages?",
    "My time, my wine, my spirit, my trust; Trying to find a part of me you didn't take up; Gave you too much but it wasn't enough; But I'll be all right, it's just a thousand cuts",
    "They say home is where the heart is; But that's not where mine lives",
    "They say home is where the heart is; But God, I love the English",
    "So please show me Hackney; Doesn't have to be Louis V up on Bond Street; Just wanna be with you; I, I, I fancy you, oh",
    "We were crazy to think; Crazy to think that this could work; Remember how I said I'd die for you?",
    "I know heaven's a thing; I go there when you touch me; Honey hell is when I fight with you",
    "But you're taking shots at me like it's Patrón; And I'm just like 'Damn, it's 7:00 a.m.'",
    "Like, can you just not step on our gowns?; You need to calm down",
    "I blew things out of proportion, now you're blue; Put you in jail for something you didn't do; I pinned your hands behind your back, oh; Thought I had reason to attack, but no",
    "Fighting with a true love is boxing with no gloves; Chemistry 'til it blows up, 'til there's no us; Why'd I have to break what I love so much?; It's on your face, and I'm to blame",
    "Hey, It's all me in my head; I'm the one who burned us down; But it's not what I meant; Sorry that I hurt you; I don't wanna do, I don't wanna do this to you; I don't wanna lose, I don't wanna lose this with you; I need to say, hey; It's all me, just don't go; Meet me in the afterglow",
    "Tell me that you're still mine; Tell me that we'll be just fine; Even when I lose my mind; I need to say; Tell me that it's not my fault; Tell me that I'm all you want; Even when I break your heart",
    "I promise that you'll never find another like me",
    "You're the only one of you; Baby, that's the fun of you; And I promise that nobody's gonna love you like me-e-e",
    "Light pink sky up on the roof; Sun sinks down, no curfew; Twenty questions, we tell the truth; You've been stressed out lately? Yeah, me too"
    ],

    // Quotes for "Folklore"
    [
        "And if my wishes came true; It would've been you; In my defense, I have none",
        "We were something, don't you think so?; Rosé flowing with your chosen family; And it would've been sweet; If it could've been me",
        "And when I felt like I was an old cardigan; Under someone's bed; You put me on and said I was your favorite",
        "But I knew you'd linger like a tattoo kiss; I knew you'd haunt all of my what-ifs; The smell of smoke would hang around this long; 'Cause I knew everything when I was young; I knew I'd curse you for the longest time; Chasin' shadows in the grocery line; I knew you'd miss me once the thrill expired; And you'd be standin' in my front porch light; And I knew you'd come back to me",
        "And they said 'There goes the last great American dynasty; Who knows, if she never showed up, what could've been; There goes the maddest woman this town has ever seen; She had a marvelous time ruining everything'",
        "I think I've seen this film before; And I didn't like the ending",
        "You're not my homeland anymore; So what am I defending now?",
        "'Cause I loved you, I swear I loved you; 'Til my dying day",
        "And I can go anywhere I want; Anywhere I want, just not home; And you can aim for my heart, go for blood; But you would still miss me in your bones; And I still talk to you (when I'm screaming at the sky); And when you can't sleep at night (you hear my stolen lullabies)",
        "And they called off the circus; Burned the disco down; When they sent home the horses; And the rodeo clowns; I'm still on that tightrope; I'm still trying everything to get you laughing at me; I'm still a believer but I don't know why; I've never been a natural; All I do is try, try, try; I'm still on that trapeze; I'm still trying everything; To keep you looking at me",
        "Passed down like folk songs; The love lasts so long",
        "Your braids like a pattern; Love you to the moon and to Saturn",
        "And I've been meaning to tell you; I think your house is haunted; Your dad is always mad and that must be why; And I think you should come live with; Me and we can be pirates; Then you won't have to cry; Or hide in the closet; And just like a folk song; Our love will be passed on",
        "Salt air, and the rust on your door; I never needed anything more; Whispers of 'Are you sure?'; 'Never have I ever before'",
        "But I can see us lost in the memory; August slipped away into a moment in time; 'Cause it was never mine; And I can see us twisted in bedsheets; August sipped away like a bottle of wine; 'Cause you were never mine",
        "Back when we were still changin' for the better; Wanting was enough; For me, it was enough; To live for the hope of it all; Cancel plans just in case you'd call; And say, 'Meet me behind the mall'; So much for summer love and saying 'us'; 'Cause you weren't mine to lose; You weren't mine to lose, no",
        "I've been having a hard time adjusting",
        "I just wanted you to know; That this is me trying; At least I'm trying",
        "They told me all of my cages were mental; So I got wasted like all my potential",
        "And my words shoot to kill when I'm mad; I have a lot of regrets about that",
        "I was so ahead of the curve, the curve became a sphere; Fell behind all my classmates, and I ended up here",
        "Pouring out my heart to a stranger; But I didn't pour the whiskey",
        "And it's hard to be at a party when I feel like an open wound; It's hard to be anywhere these days when all I want is you; You're a flashback in a film reel on the one screen in my town",
        "And that's the thing about illicit affairs; And clandestine meetings and longing stares; It's born from just one single glance; But it dies, and it dies, and it dies; A million little times",
        "And you wanna scream; Don't call me 'kid'; Don't call me 'baby'; Look at this godforsaken mess that you made me; You showed me colors you know I can't see with anyone else",
        "Don't call me 'kid'; Don't call me 'baby'; Look at this idiotic fool that you made me; You taught me a secret language I can't speak with anyone else",
        "And you know damn well; For you, I would ruin myself; A million little times",
        "What did you think I'd say to that?; Does a scorpion sting when fighting back?; They strike to kill and you know I will",
        "And there's nothin' like a mad woman; What a shame she went mad; No one likes a mad woman; You made her like that; And you'll poke that bear 'til her claws come out; And you find something to wrap your noose around; And there's nothin' like a mad woman",
        "'Cause you took everything from me; Watchin' you climb; Watchin' you climb; Over people like me; The master of spin; Has a couple side flings; Good wives always know; She should be mad; Should be scathing like me",
        "The worst thing that I ever did; Was what I did to you; But if I just showed up at your party; Would you have me?; Would you want me?; Would you tell me to go fuck myself?; Or lead me to the garden?",
        "I'm only 17, I don't know anythin'; But I know I miss you",
        "I never had the courage of my convictions; As long as danger is near; And it's just around the corner, darling; 'Cause it lives in me; No, I could never give you peace",
        "But I'm a fire, and I'll keep your brittle heart warm; If your cascade ocean wave blues come; All these people think love's for show; But I would die for you in secret",
        "The devil's in the details, but you got a friend in me; Would it be enough if I could never give you peace?",
        "Your integrity makes me seem small; You paint dreamscapes on the wall; I talk shit with my friends; It's like I'm wasting your honor",
        "And you know that I'd swing with you for the fences; Sit with you in the trenches; Give you my wild, give you a child; Give you the silence that only comes when two people understand each other; Family that I chose, now that I see your brother as my brother; Is it enough?",
        "But there's robbers to the east, clowns to the west; I'd give you my sunshine, give you my best; But the rain is always gonna come if you're standing with me",
        "Would it be enough if I could never give you peace?",
        "Take me to the lakes where all the poets went to die; I don't belong, and my beloved, neither do you; Those Windermere peaks look like a perfect place to cry; I'm setting off, but not without my muse",
        "I want auroras and sad prose; I want to watch wisteria grow right over my bare feet; 'Cause I haven't moved in years; And I want you right here",

    ],
    // Quotes for "Evermore"
    [
    "I never would've known from that look on your face; Lost in your current like a priceless wine; The more that you say; The less I know; Wherever you stray; I follow; I'm begging for you to take my hand; Wreck my plans; That's my man",
    "You know that my train could take you home; Anywhere else is hollow",
    "Life was a willow and it bent right to your wind (oh); They count me out time and time again",
    "Wait for the signal and I'll meet you after dark; Show me the places where the others gave you scars; Now this is an open-shut case",
    "Because I dropped your hand while dancing; Left you out there standing; Crestfallen on the landing; Champagne problems",
    "Your Midas touch on the Chevy door; November flush and your flannel cure; 'This dorm was once a madhouse'; I made a joke, 'Well, it's made for me'",
    "One for the money, two for the show; I never was ready, so I watch you go; Sometimes you just don't know the answer; 'Til someone's on their knees and asks you",
    "'She would've made such a lovely bride; What a shame she's fucked in the head,' they said",
    "But you'll find the real thing instead; She'll patch up your tapestry that I shred",
    "What must it be like; To grow up that beautiful?; With your hair falling into place like dominos",
    "If I wanted to know who you were hanging with; While I was gone I would have asked you; It's the kind of cold, fogs up windshield glass; But I felt it when I passed you",
    "There's an ache in you put there by the ache in me; But if it's all the same to you; It's the same to me",
    "Sleep in half the day just for old times' sake; I won't ask you to wait if you don't ask me to stay; So I'll go back to L.A. and the so-called friends; Who'll write books about me, if I ever make it; And wonder about the only soul who can tell which smiles I'm fakin'; And the heart I know I'm breakin' is my own",
    "There'll be happiness after me; But there was happiness because of me; Both of these things can be true",
    "I hope she'll be a beautiful fool; Who takes my spot next to you; No, I didn't mean that; Sorry, I can't see facts through all of my fury",
    "I can't make it go away by making you a villain; I guess it's the price I pay for seven years in heaven",
    "No one teaches you what to do; When a good man hurts you; And you know you hurt him too",
    "You got shiny friends since you left town; A tiny screen's the only place I see you now; And I got nothing but well wishes for ya",
    "It's never too late; To come back to my side; The stars in your eyes; Shined brighter in Tupelo; And if you're ever tired of being known; For who you know; You know, you'll always know me",
    "How's one to know?; I'd meet you where the spirit meets the bones; In a faith forgotten land",
    "Oh, I can't, Stop you putting roots in my dreamland; My house of stone, your ivy grows; And now I'm covered in you",
    "So yeah, it's a fire; It's a goddamn blaze in the dark; And you started it; You started it; So yeah, it's a war; It's the goddamn fight of my life; And you started it",
    "This is gonna be one of those things; Now I know; I'm never gonna love again",
    "Never be so kind, you forget to be clever; Never be so clever, you forget to be kind",
    "Gray November; I've been down since July",
    "Hey December; Guess I'm feeling unmoored; Can't remember; What I used to fight for",
    "And I was catching my breath; Floors of a cabin creaking under my step; And I couldn't be sure; I had a feeling so peculiar; This pain wouldn't be for; Evermore",
    "Sometimes, givin' up is the strong thing; Sometimes, to run is the brave thing; Sometimes, walkin' out is the one thing; That will find you the right thing",
    "Friends break up, friends get married; Strangers get born, strangers get buried; Trends change, rumors fly through new skies; But I'm right where you left me"
    ],

    // Quotes for "Midnights"
    [
        "Talk your talk and go viral; I just need this love spiral; Get it off your chest; Get it off my desk (get it off my desk); Talk your talk and go viral; I just need this love spiral; Get it off your chest; Get it off my desk",
        "When the morning came we were cleaning incense off your vinyl shelf; 'Cause we lost track of time again; Laughing with my feet in your lap; Like you were my closest friend; 'How'd we end up on the floor anyway?' You say; 'Your roommate's cheap-ass screw-top rosé, that's how'; I see you every day now",
        "And I wake with your memory over me; That's a real fucking legacy to leave",
        "The burgundy on my T-shirt when you splashed your wine into me; And how the blood rushed into my cheeks, so scarlet (it was maroon); The mark you saw on my collarbone, the rust that grew between telephones; The lips I used to call home, so scarlet (it was maroon); It was maroon",
        "I have this thing where I get older but just never wiser",
        "Midnights become my afternoons",
        "I should not be left to my own devices; They come with prices and vices; I end up in crisis",
        "I wake up screaming from dreaming; One day I'll watch as you're leaving; 'Cause you got tired of my scheming; (For the last time)",
        "It's me, hi, I'm the problem, it's me; At tea time, everybody agrees; I'll stare directly at the sun but never in the mirror; It must be exhausting always rooting for the anti-hero",
        "Sometimes I feel like everybody is a sexy baby; And I'm a monster on the hill; Too big to hang out, slowly lurching toward your favorite city",
        "I wake up screaming from dreaming; One day I'll watch as you're leaving; And life will lose all its meaning; (For the last time)",
        "And it's like snow at the beach; Weird but fuckin' beautiful; Flying in a dream, stars by the pocketful; You wanting me tonight feels impossible; But it's comin' down, no sound, it's all around; Like snow on the beach",
        "Now I'm all for you like Janet; Can this be a real thing? Can it?",
        "Summer went away, still, the yearning stays; I play it cool with the best of them; I wait patiently, he's gonna notice me; It's okay, we're the best of friends",
        "I play my songs in the parking lot; I'll run away",
        "'Cause there were pages turned with the bridges burned; Everything you lose is a step you take; So make the friendship bracelets, take the moment and taste it; You've got no reason to be afraid",
        "My boy was a montage; A slow-motion, love potion; Jumping off things in the ocean; I broke his heart 'cause he was nice",
        "We had one thing going on; I swear that it was something; 'Cause I don't remember who I was before you; Painted all my nights; A color I've searched for since",
        "Ladies always rise above; Ladies know what people want; Someone sweet and kind and fun; The lady simply had enough",
        "Don't put me in the basement; When I want the penthouse of your heart",
        "Uh oh, I'm falling in love; Oh no, I'm falling in love again; Oh, I'm falling in love; I thought the plane was going down; How'd you turn it right around",
        "'Cause karma is my boyfriend; Karma is a god; Karma is the breeze in my hair on the weekend; Karma's a relaxing thought; Aren't you envious that for you it's not?; Sweet like honey, karma is a cat; Purring in my lap 'cause it loves me; Flexing like a goddamn acrobat; Me and karma vibe like that",
        "On the way home, I wrote a poem; You say, 'What a mind'; This happens all the time, ooh, ooh",
        "They said the end is comin' (they said the end is comin'); Everyone's up to somethin' (everyone's up to somethin'); I find myself runnin' home to your sweet nothings; Outside, they're push and shovin' (outside, they're push and shovin'); You're in the kitchen hummin' (you're in the kitchen hummin'); All that you ever wanted from me was sweet nothin'",
        "What if I told you I'm a mastermind?; And now you're mine; It was all by design; 'Cause I'm a mastermind",
        "If you fail to plan, you plan to fail; Strategy sets the scene for the tale",
        "And I swear; I'm only cryptic and Machiavellian 'cause I care",
        "No one wanted to play with me as a little kid; So I've been scheming like a criminal ever since; To make them love me and make it seem effortless",
        "So I told you none of it was accidental; And the first night that you saw me, nothing was gonna stop me; I laid the groundwork and then saw a wide smirk; On your face, you knew the entire time",
        "Catastrophic blues; Movin' on was always easy for me to do; It hits different; It hits different 'cause it's you",
        "And maybe it's the past that's talkin'; Screamin' from the crypt; Tellin' me to punish you for things you never did; So I justified it",
        "It turned into something bigger; Somewhere in the haze, got a sense I'd been betrayed; Your finger on my hair pin triggers; Soldier down on that icy ground; Looked up at me with honor and truth; Broken and blue, so I called off the troops; That was the night I nearly lost you; I really thought I lost you",
        "Privacy sign on the door; And on my page and on the whole world; Romance is not dead if you keep it just yours",
        "I wanna brainwash you; Into loving me forever; I wanna transport you; To somewhere the culture's clever; Confess my truth; In swooping, sloping, cursive letters",
        "Never take advice from someone who's falling apart; Never take advice from someone who's falling apart",
        "How long could we be a sad song; 'Til we were too far gone to bring back to life?; I gave you all my best me's, my endless empathy; And all I did was bleed as I tried to be the bravest soldier; Fighting in only your army; Frontlines, don't you ignore me; I'm the best thing at this party; (You're losin' me); And I wouldn't marry me either; A pathological people pleaser; Who only wanted you to see her; And I'm fadin', thinkin'; 'Do something, babe, say something' (say something); Lose something, babe, risk something' (you're losin' me)' Choose something, babe, I got nothing (got nothing); To believe; Unless you're choosin' me'",
    ],
    // Quotes for "The Tortured Poets Dept"
    [
    "And for a fortnight there, we were forever; Run into you sometimes, ask about the weather; Now you're in my backyard, turned into good neighbors; Your wife waters flowers, I wanna kill her",
    "I love you, it's ruining my life",
    "But you're in self-sabotage mode; Throwing spikes down on the road; But I've seen this episode and still loved the show; Who else decodes you?",
    "And who's gonna hold you like me?; And who's gonna know you, if not me?",
    "Everyone we know understands why it's meant to be; 'Cause we're crazy; So tell me, who else is gonna know me?",
    "Did you really beam me up?; In a cloud of sparkling dust; Just to do experiments on; Tell me I was the chosen one; Show me that this world is bigger than us; Then sent me back where I came from; For a moment I knew cosmic love",
    "Now I'm down bad crying at the gym; Everything comes out teenage petulance; 'What if I can't have him'; 'I might just die, it would make no difference.'; Down bad, waking up in blood; Staring at the sky, come back and pick me up; What if I can't have us.; I might just not get up; I might stay down bad",
    "Like I lost my twin; What if I can't have him",
    "I loved your hostile takeovers; Encounters closer and closer; All your indecent exposures; How dare you say that it's -; I'll build you a fort on some planet; Where they can all understand it; How dare you think it's romantic; Leaving me safe and stranded; Cause what if I was in love; What if I can't have us.; Cause what if I was in love",
    "You swore that you loved me but where were the clues?; I died on the altar waiting for the proof",
    "You sacrificed us to the gods of your bluest days; And I'm just getting color back into my face; I'm just mad as hell cause I loved this place",
    "And you say I abandoned the ship; But I was going down with it",
    "Your home's really only a town you're just a guest in (take me to Florida); So you work your life away",
    "What if he's written 'mine' on my upper thigh; Only in my mind?",
    "I keep these longings locked, In lowercase inside a vault",
    "If it's make believe; Why does it feel like a vow; We'll both uphold somehow?",
    "They don't know how you've haunted me; So stunningly; I choose you and me; ... Religiously",
    "You don't get to tell me about sad",
    "I was tame, I was gentle 'til the circus life made me mean; 'Don't you worry, folks, we took out all her teeth'; Who's afraid of little old me?; Well, you should be",
    "If you know it in one glimpse; It's legendary; What we thought was for all time; Was momentary; Still alive, killing time at the cemetery; Never quite buried; You cinephile in black and white; All those plot twists and dynamite; Mr. Steal Your Girl, then make her cry; You said I'm the love of your life",
    "I wish I could un-recall; How we almost had it all",
    "And I'll still see it until I die; You're the loss of my life",
    "He said he'd love me all his life; But that life was too short",
    "I move through the world with the heartbroken; My longings stay unspoken; And I may never open up the way I did for you",
    "So if you want to break my cold, cold heart; Say you loved me; And if you want to tear my world apart; Say you'll always wonder",
    "My beloved ghost and me; Sitting in a tree; D-Y-I-N-G",
    "Touch me while your bros play Grand Theft Auto",
    "I feel so high school every time I look at you; I wanna find you in a crowd just to hide from you",
    "You see I was a debutant in another life but; Now I seem to be scared to go outside",
    "I hate it here so I will go to; secret gardens in my mind; People need a key to get to; The only one is mine",
    "I'm lonely but I'm good; I'm bitter but I swear I'm fine; I'll save all my romanticism for my inner life and I'll get lost on purpose",
    "I read about it in a book when I was a precocious child; No mid-sized city hopes and small town fears; I'm there most of the year; Cause I hate it here; I hate it here",
    "Does it feel alright to not know me?; I'm addicted to the 'if only'",
    "They say, 'What doesn't kill you makes you aware'; What happens if it becomes who you are?",
    "And I won't confess that I waited; But I let the lamp burn; As the men masqueraded; I hoped you'd return",
    "Tell me all that you'd learned; Cause love's never lost when perspective is earned",
    "The only thing that's left is the manuscript; One last souvenir from my trip to your shores; Now and then I reread the manuscript; But the story isn't mine anymore"
    ],

    // Quotes for "bonus"
    [
    "Main Agar Kahoon; Humsafar Meri; Apsara Ho Tum Ya Koi Pari; Tareef Yeh Bhi To Sach Hai Kuch Bhi Nahi........HAPPY BIRTHDAY my own shanti priya, Rushil",
    "She a girl I saw for the first time but never knew she would become an inseparable part of my life; She is the only person I can trust like my personal diary; Even if we have some distances in between, she stays the same as if it was yesterday we met. Promita",
    "Udita saying you're very nice would be an understatement really. You're very patient and understanding (Allahumma barik). I've been very rude to you yet you're so nice to me T T. Thank you. I really respect you for this. Nah, I respect you as a human. If I had a list of people I respect a lot, you'd be in the top 3 easily. Sadida",
    "Im not sure if anyone has ever told you how charismatic you are! You've got all the rizz frfr yeehaw! <3 Tbvh, you are one of the most genuine souls I know. You're the type of person that everyone wants to befriend. I don't know if I deserve to be your friend, but I'm just glad I know you ehe <3 Also I know I'm not the best at expressing myself (thanks to my tone and RBF), but I really adore you, bubooooooooooo! Thanks for existing and for being my girl crush, ehehe! May Allah bless you, ameen; Happy birthday, Prioti Pookie!; (btw ami ki tomar bondhu ehe?), Rifah",
    "Happy birthday Udita!! I honestly never thought we would get THIS close like now but it's much more than I ever wanted. You are my favourite person in the entire university! LOVE YOU LOTSSS <3 (real), Bipasha",
    "Hello Udipi, prothom e janai notun bochor er shuveccha. You are one of my comfort zone bro. And is a bookworm, I want to give a pov and that is:- The energy came off her and illuminated everything and everyone around her. Thanks to my Almighty for letting me know this beautiful soul <3 from an excellence soul. Nowsin (this was written in Bangla)",
    "1. Udita is a great listener; not just in the way that she listens with such attention, but also knowing exactly how to react and respond to every word you're saying. 2. She's a human equivalent of a safety vault. From your most prized possessions to your deepest darkest secrets, she'll make sure they're kept safe. 3. I haven't met many people who manage to see the good in everyone like she does. 4. And she has a circle of friends that reflects the essence of who she isjoyous, graceful, and radiant, with all those qualities amplified many times over in their presence. Puspita Apu on your admirable qualities",
    "If you dont understand anything, I will explain it to you twice. If youre having a bad day, Ill bring milkshake with ice. Towaha",
    "Priota is undoubtedly one of the prettiest persons I've ever seen, but its her kindness and confidence that truly reveals her inner beauty. And she is so open-minded that I can literally share anything without fear of judgment <3. Semonti Apu",
    "You're one of the most considerate people I know. The sweetest ball of sunshine. Thank you for always checking on me. Love you <3. Riana",
    "Udita. Before I say anything, I must speak about how your quirks make you so adorable and fun. Yes, you're not the typical definition of fun, but I very much like your version. (I thought of All Too Well Taylor's version with that jdkdkkdkd). Sumaiya",
    "You know, your way of hyping someone up oddly reminds me of the shade of a large tree, with occasional light breezes. It's subtle and comforting. But whenever the breeze stops for a while, you find yourself wondering how nice it was. Please know that your actions don't go unnoticed, but often, they remain in the background. Sumaiya",
    "Have I ever told you how cool you are? You may hear that a lot, but allow me to speak of my POV. Through my lenses, you are the type of cool that doesn't need to be declared throughout. It's there, but only those who choose to seek will see. You know what they say, the best way to hide something is to hide it in plain sight. If that isn't you, idk who is. Sumaiya",
    "You scream the main character energy. Not the ones that are all-over-your-face, but the ones that choose to give the spotlight to others, not knowing that the compass always points North. Sumaiya",
    "All I wish for you is to know that you deserve the same love and hype (if not more) that you give out to people. I hope this small effort from my side helps you realize that. Love you to the moon and back. Kisses <3. Sumaiya"
    ],


];
// Initialize an array to keep track of previously displayed quotes for each segment
let previousQuotes = new Array(segments.length).fill(null);

// Calculate the angle of each segment based on the number of segments
const segmentAngle = 360 / segments.length;

btn.onclick = function() {
    // Generate a random rotation increment between 360 and 720 degrees
    let rotationAmount = Math.floor(Math.random() * 360) + 360;
    currentRotation += rotationAmount;

    // Apply rotation and initiate the spinning animation
    container.style.transition = "transform 5s ease-out"; // Smooth transition
    container.style.transform = `rotate(${currentRotation}deg)`;

    // Set a timeout to calculate and show the result after the spinning animation
    setTimeout(() => {
        // Calculate which segment the wheel stops at
        let finalRotation = currentRotation % 360; // Get the rotation within 360 degrees
        let segmentIndex = Math.floor((360 - finalRotation) / segmentAngle) % segments.length;

        // Display the result
        resultBtn.textContent = `Result: ${segments[segmentIndex]}`;

        // Get a random quote for the result
        let segmentQuotes = quotes[segmentIndex];
        let randomQuote;
        
        // Ensure the quote is different from the previous one
        do {
            randomQuote = segmentQuotes[Math.floor(Math.random() * segmentQuotes.length)];
        } while (previousQuotes[segmentIndex] === randomQuote && segmentQuotes.length > 1);

        // Update the previous quote for this segment
        previousQuotes[segmentIndex] = randomQuote;
        
        // Display the quote
        quoteDisplay.textContent = randomQuote;
    }, 5000); // Time should match the spinning duration (5 seconds)
}
