<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { useElementVisibility } from "@vueuse/core";

const emit = defineEmits<{
  titleVisibilityChange: [isVisible: boolean];
}>();

const titleVisibilityHandle = ref(null);
const titleIsVisible = useElementVisibility(titleVisibilityHandle);

watchEffect(() => emit("titleVisibilityChange", titleIsVisible.value));

defineProps<{
  showContinueReadingButton?: boolean;
}>();
</script>

<template>
  <div
    :class="
      twMerge(
        'overflow-hidden relative',
        showContinueReadingButton
          ? 'max-h-[45rem] md:w-[55%]'
          : 'md:max-w-lg mx-auto'
      )
    "
  >
    <h2 class="h4" v-if="showContinueReadingButton">Read an excerpt...</h2>
    <div style="view-transition-name: excerpt">
      <div ref="titleVisibilityHandle"></div>

      <p class="h2 mb-0">Chapter One</p>

      <p class="h3">A New Normal</p>
      <p>
        <em>
          It is now 3:45. Gail whispering about how bad I am.<br
            class="hidden md:block"
          />
          She just whispered, “I have to get out of here”.
        </em>
      </p>
      <p
        class="first-letter:text-4xl first-letter:float-left first-letter:w-[50px] first-letter:leading-[90px] first-letter:pr-12"
      >
        I stood quiet by her bedside, dim morning shadows playing at her
        eyelashes and the gentle lines of her face. Whispered soft breaths
        counted out the rise and fall of her chest. I’d been standing there for
        some time and realized I was breathing right along with her subtle
        movements. This was my Gail—wife and mother to my children, my beautiful
        best friend, my queen. She was so peaceful and still in that moment, so
        like herself that I could almost forget, almost pretend she was just as
        she ever was. Everything was normal. We were not really at Victory
        Center, our new home. She opened her eyes, and the dream was gone.
      </p>
      <p>
        “Who are you?” she asked in a clear voice. Sometimes it was clearest
        when her memory was at its least clear, but I would take a few
        unscrambled words from her whenever I could get them.
      </p>
      <p>
        “I’m your husband, Richard.” I smiled wide, hoping my cheerfulness would
        encourage her.
      </p>
      <p>“Oh,” was her curt answer. Her eyes glared suspicion back at me.</p>
      <p>
        “Let’s get you up, Gail.” I moved to place a gentle hand on her
        shoulder, but she recoiled from my touch.
      </p>
      <p id="thetest">“I’m Gail!” she corrected me.</p>
    </div>
    <div
      v-if="showContinueReadingButton"
      class="bg-gradient-to-t from-primary-2 from-20% absolute bottom-0 inset-x-0 h-[150px] flex items-end"
    >
      <NuxtLink class="button" to="/excerpt">Continue Reading</NuxtLink>
    </div>

    <p>“That’s right. You’re Gail. I’m Richard, your husband. Remember?”</p>
    <p>“Oh.” Eyes still glaring.</p>
    <p>“Come on, Gail. It’s time for breakfast.”</p>
    <p>
      I’d almost stopped smelling the mess hidden beneath layers of lilac
      fabric, but a subtle shift from Gail reminded me. Sitting in soiled
      bedding would only add to her agitation and further tax her fragile
      immunity in the event of a rash. I reached for her hand below the blanket,
      but was too slow. In a moment, she yanked free and revealed a weapon she’d
      been hiding for who knows how long. The side of a slip-on sole met the
      side of my head, stunning me for just a moment. How difficult it must be
      to fall asleep in a strange place, then wake up only to open your eyes
      upon a stranger in your bedroom. The thought pained me for her sake as
      much as my own—of not being known by my beloved. I threw my hands up in
      mock surrender and gave as lighthearted of a smile as I could manage. At
      least it wasn’t a knife; I lifted a quick prayer of thanks. So far, we’d
      left that terror behind us at Hunt Club Apartments, and I thought I had
      learned not to start Gail’s day within swinging range.
    </p>
    <p>
      “Alright,” I said in my calmest tone. “That’s ok. We can take our time.
      Why don’t you give me the shoe, and we can—?”
    </p>
    <p>
      “What?” Like a cloud passes and another takes its place, Gail’s scowl gave
      way to confusion. She stared at the foreign object in her hand like
      someone else had put it there, then set it on the bed, shaking her head
      and muttering sounds that weren’t words, at least not to me. When her eyes
      made the trip back up to mine, they were full of Gail again.
    </p>
    <p>
      “My husband,” she said with a mix of realization…and relief, I thought.
    </p>
    <p>“That’s right,” I said, feeling much of the latter.</p>
    <p>
      This time, she reached for my hand and pulled me down into a hug. She was
      so strong. She always had been, in so many ways, stronger than me. She
      hadn’t lost that.
    </p>
    <p>
      We lay there holding each other until I felt one of our stomachs rumbling,
      reminding me that the breakfast I’d heated that morning was growing cold
      on the kitchen counter, and before we could get to it, Gail needed
      cleaning. Gail let me help her out of bed, and the mess was not as bad as
      the aroma…unfortunately so. Her digestion had taken an extended downward
      turn over the last week, and the resulting constipation made her
      uncomfortable in ways she could no longer verbally communicate. Rather,
      she showed me through marked behavioral decline. I would have welcomed
      more to clean up if that meant my Gail felt better.
    </p>
    <p>
      Even so, I said thanks to God for granting her that little bit of relief.
      In the shower, she was helpful, playful even—a welcome surprise. I hadn’t
      stopped being a man, even if my wife didn’t remember me half of each day.
      The smallest moment of affection was enough to get me through the hardest
      times. A pat on the shoulder or the way she would sometimes cup my face in
      her hands, even a quick smile was like warm food to a beggar.
    </p>
    <p>
      After she was cleaned and dressed for the day, I led her to the small
      dining table I had positioned beneath a window, and she smiled at me as I
      left for our kitchenette to reheat her breakfast. I thought of the staff
      downstairs and smiled as the microwave plate turned and hummed. The dining
      hall kitchen, being just a short trip down one flight of steps from our
      apartment, was one of the many unexpected blessings of moving to Victory
      Center. I was sure to make friends with the dining staff right away.
      Theirs was a thankless job, and even more so in a place like this, as I
      saw daily. I frequently told them in person how important they were to us,
      particularly for my wife’s quality of life. And if being friendly with the
      cooks encouraged them to be a little extra generous with portions and
      special orders for Gail…well then, that was just fine with me.
    </p>
    <p>
      “Who are these people?” Gail’s murmur pulled me back to the present, and I
      paused in front of our microwave.
    </p>
    <p>
      “I’m your husband, Richard,” I said, as I had so many times, waiting for
      what would come next.
    </p>
    <p>
      No response came, not even a head turn, like I’d caught her and a friend
      conspiring. She continued muttering under her breath to no one I could see
      in the room. Since arriving at Victory Center, there had been little of
      this paranoid behavior and the violence that was so often present—the
      shoeing had been the worst of it, a far cry from her tearing my shirts and
      me having to hide sharp objects. The microwave dinged, and I kept one eye
      trained on my wife as I stirred her scrambled eggs and cream of wheat.
    </p>
    <p>
      During breakfast, I was no longer Richard, husband. I’d become Richard,
      unknown and unwanted intruder, encroaching on a world only Gail and her
      invisible co-conspirator occupied. I wondered many times why her disease
      took her there. Was it the place she felt safe from a reality she no
      longer understood. How I wished to have her back. But that wasn’t the real
      world either.
    </p>
    <p>
      I knew little about what she talked about when she was away, only that
      most of it was about whoever she thought I was. Sometimes I was accused by
      name, sometimes as “him” or “the man.” If she called this villain
      “Richard” as she discussed my misdeeds with her accomplice, and I broke
      the stream of muttering with a “That’s me!”, a sideways glower was her
      stock punishment. Sometimes I knew who she spoke to, catching a name or a
      clue out of her mumbles. They would usually be a family member, her
      sister, or mother. Others I didn’t recognize—Charlie was common, and I
      never learned who that was. This morning, there was no name, and that was
      common also.
    </p>
    <p>
      After a spell, she let her disgruntled conversation fall away and eating
      gradually stole her focus. I seized the moment to engage her, but she
      would only nod in response, or she wouldn’t acknowledge me at all, not
      even glance my way. I was still firmly fixed as the villain. But she—she
      was still my beautiful bride and would never be alone or lack for care,
      whether she wanted it or not.
    </p>
    <p>
      I watched her eat, landing one spoonful out of three, the others finding
      shirt, or lap, or back onto plate or table. Should I step in? was a
      question I wondered at every meal. Nutrition was vital for her health, and
      every bite lost was full of valuable calories and nutrients. Were they
      worth peeling away another piece of her already thin independence? Would
      it even help if I did?
    </p>
    <p>
      I decided to let her find her own way through breakfast and was proud how
      much she ended up eating without aide. That was a good sign, so the
      experts told me. Constipation was a problem that only became bigger as you
      aged, and particularly in these situations. Appetite was the only
      barometer we had for those who couldn’t tell you with words. I hoped her
      bowels would ease soon, and hopefully, her mood would follow.
    </p>
    <p>
      I took her empty plate, and she resumed conversation with our unseen
      guest, only pausing when I came back for her napkin and again to wipe up.
      I took her hand, which she received like a prisoner accepting cuffs, and I
      guided her to the living room to sit in the reclining chair she liked
      most. I took my seat nearby. Her chatter started up again, mostly
      mumblings broken by an occasional clear word or phrase. Complete sentences
      from Gail had become rarer with each passing week. That hit me the hardest
      in these quiet moments alone with Gail. She and I had always talked
      through our problems and enjoyed conversing on the many big and small
      topics married people talk about. We leaned on each other during hard
      times and shared each other’s joys during the good ones. There were plenty
      of both, and we were stronger for all of it; we were stronger together.
      How much I would have given at Hunt Club and Victory Center to ask what
      she needed and have her tell me in the simplest words.
    </p>
    <p>
      Over the next hour or so, I might not have been present at all for the
      little Gail seemed to notice me. At times, her communication was very
      serious—long stretches of tightly scrunched eyes and noises which sounded
      aimed more than communicated. Then something would switch in her. Laughter
      would brighten her face, and she would sit smiling, sharing some pleasant
      memory I hoped was of me. This continued that day until the therapist came
      to work with Gail in the early afternoon. I usually stayed through the
      sessions. Any clue from these experts, even a tiny one, some small way to
      communicate better, might unlock a heightened quality of life for her and
      me. But our fridge was nearing empty that day, so while she was under the
      care of another, I left for provisions.
    </p>
    <p>
      Forty-five minutes later, I returned from the grocery, hands full as I
      paused outside our door listening for any clues to what scene I might find
      upon entering. Nothing. The bags crinkled around my wrist as I turned the
      knob and found a changed Gail. That wasn’t a surprise—the last several
      years had been nothing but change—“new normals” as I had come to know
      them. But this was a pleasant one.
    </p>
    <p>
      “There’s my husband!” a familiar voice greeted me as I pushed the door
      open with my butt.
    </p>
    <p>
      I don’t think I could have stopped myself from smiling if I tried. I set
      the bags down in the entrance and walked to my wife, and she took up the
      last remaining step between us. As we embraced, she whispered “I missed
      you” in my ear, in the way she had done so many times throughout our life
      together. There might not have been more in those words than a simple
      moment of lucidity—a husband returning from a quick trip to the store. But
      when I told her I missed her too, I felt the weight of years. I closed my
      eyes and held her as long as she would let me. When I opened them,
      condensation from the yogurt package was pooling, and still I couldn’t let
      go. I leaned back to take her in, and she smiled at me and said she was
      hungry.
    </p>
    <p>
      The upturn in mood and communication was still there when I returned from
      the dining hall downstairs and placed lunch on the table in front of Gail.
      I asked how each thing tasted, and she smiled and nodded her approval.
    </p>
    <p>“Do you like the sweet potatoes?” I specified to keep her engaged.</p>
    <p>
      “Very good,” she said in return—the same answer given of the sliced pork
      and the apple crisp. Lunch crescendoed to the tune of a clear-as-day
      “Thank you” as I picked up her empty plate. I washed dishes as fast as my
      trembling fingers could, not wanting to spend a single moment away from my
      wife’s bright eyes. When I returned, she looked up at me, and a different
      face had replaced my Gail’s. It was that fast.
    </p>
    <p>
      This face was familiar to me, one which had become a constant dark shadow
      during our time at Hunt Club Apartments. Twisted and contorted—someone
      seeing this for the first time might have believed she was possessed by a
      demon.
    </p>
    <p>
      There were so many versions of Gail during different aspects of her
      dementia. Some version would break through, reminding me so much of my
      wife that I was transported to better years. Others… I couldn’t imagine
      where they came from—primal, awful fits of rage that would engulf her,
      removing any resemblance to the wife I knew, replacing her with someone or
      something I couldn’t know. I smiled through the pain, like a twisted knife
      was lodged in my stomach, and asked this warped version that was not my
      beautiful Gail if she needed anything. A dark, side-eyed glance peered
      beneath furrowed brows and a low, breathy muttering was the only answer I
      received.
    </p>
    <p>“Bad…” she croaked. “Always bad to me…”</p>
    <p>
      The rest of the afternoon was a reprisal of highs and lows, each one
      higher or lower than before my trip to the store. Laughter was no longer
      soft and glowing but bordered on hysterical. Irritated grumbling was
      replaced by hostile shouting. Waves of this behavior battered the day, and
      during one episode upon returning from the bathroom, I found her chair
      vacant. I turned just in time to avoid the swing of one of my shoes aimed
      at me, thankfully, not very well. I found my Gail in a state of frantic
      dishevelment and agitation, her blouse on backwards, pants missing, and
      the partner to my shoe missile on one of her feet. For the next few
      minutes, I blocked and dodged while attempting to guide my wife trapped
      inside this angry and paranoid body away from tripping hazards. A broken
      hip was my primary concern. When I finally got the other shoe from her
      vice-gripped fingers and sat her back down, she and her mood seemed to
      relinquish the fight and fell together, deep into the cushions. A sullen
      breath escaped her along with the words, “I have to get out of here.” With
      both eyes trained on her, I used this still moment to call one of the CNAs
      for backup. They came within a quarter of an hour, each minute feeling
      longer, and with no small effort, gave her an antipsychotic tranquilizing
      pill. She fought against them, irate and frightened. It was all I could do
      to keep from sobbing openly. If it wasn’t for the adrenaline, I probably
      would have.
    </p>
    <p>
      Mood stabilizers were the base medication at that time, and by themselves
      reduced Gail’s hallucinations and severe agitation, but I believed they
      were also worsening her memory, her communication, and increasing the
      ever-present risk of falling. But what else could be done in these
      moments? Any change in her could be this terrible disease running its
      course. I felt helpless and desperate. But the tranquilizers were strong
      and immediate. Her mood returned to a sleepier version of this “new
      normal,” and we avoided having to restrain her. At least it had not come
      to that. But still, I felt the weight of guilt of not knowing what more I
      could have done to help her. Oh, how I wished Gail could tell me if what I
      was doing was right!
    </p>
    <p>
      As the sun began peeking through the window that afternoon, its golden
      light touched my bride’s face and illuminated her hair in a soft glow. And
      my Gail was back—sleepy, lucid, smiling at me from the sofa, and she
      allowed me to kiss her. I wanted more than that. I wanted to shower her
      with affection and hold onto her tight and never let her go away again.
      But I knew I couldn’t hold her there. That was not up to me. I stayed
      still in that quiet, sweet moment trying not to disturb it, like a hiker
      watching a shy doe. My doe stayed with me that evening. She stayed until
      she nodded off and slept peacefully until well after dark, and I let her
      be, happily. Before I turned myself into bed, the nurses came and helped
      Gail into her pajamas and administered more medication. She asked for a
      hug, and as I did, silent tears escaped my guard, finally given way to
      exhaustion. In a few moments, Gail was breathing heavily just as she had
      that morning, her chest rising and falling in a peaceful rhythm. A break
      in this chaotic world she resided in. I crawled into my own bed next to
      hers and fought my own sleep, clinging to this moment with my beloved. But
      I soon followed her.
    </p>
    <p>
      I woke expecting to check on Gail in the dark as usual but found morning
      light shining through the bedroom window. I had slept late as I rarely
      did, which felt good…but only for a moment. Realization that I hadn’t
      helped Gail with any middle-of-the-night bathroom activity stormed into my
      groggy consciousness, a disaster was likely waiting for me. Scanning her
      bed, I found blankets thrown off and her wearing only a pajama top. I
      crept past her sleeping frame and braced for the inevitable mess, a kind I
      had encountered before, involving every room as Gail would have tried to
      locate the bathroom, then the toilet. But an article of clothing caught my
      attention, an empty pajama leg gaping back at me from the open bathroom
      door. Slow and measured steps took me to the bathroom as I crouched down
      looking for the rest. They were lying dejected on the floor—no mess, no
      smell came from them. But an odor lingered in the air, and I glanced in
      the open toilet bowl. I smiled. She was finally turning a corner, and the
      proof was floating solid in the water. I couldn’t refrain saying aloud,
      “It is going to be a great day. What a lovely wife I have.”
    </p>
    <p>
      Gail was still sleeping peacefully in bed. Finally, a chance to crack open
      the journal and begin writing our journey had presented itself. Too many
      mornings, I hadn’t had the chance. But I wasn’t complaining. I was in this
      boat with Gail, sailing against whatever unseen currents. Come what may,
      and with God’s help, I would see us to the other shore.
    </p>
    <aside class="text-center mt-24">
      “My frame was not hidden from you when I was made in the secret place,
      when I was woven together in the depths of the earth. Your eyes saw my
      unformed body; all the days ordained for me were written in your book
      before one of them came to be.” Psalm 139:15-16
    </aside>
  </div>
</template>
