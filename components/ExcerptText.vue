<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { useElementVisibility } from "@vueuse/core";

const emit = defineEmits<{
  titleVisibilityChange: [isVisible: boolean];
}>();

const titleVisibilityHandle = ref(null);
const titleIsVisible = useElementVisibility(titleVisibilityHandle);

watch(titleIsVisible, () =>
  emit("titleVisibilityChange", titleIsVisible.value),
);

defineProps<{
  showContinueReadingButton?: boolean;
}>();
</script>

<template>
  <div
    :class="
      twMerge(
        'relative overflow-hidden',
        showContinueReadingButton
          ? 'max-h-[45rem] md:w-[70%]'
          : 'mx-auto md:max-w-lg',
      )
    "
  >
    <h2
      class="h4 text-base md:text-xl font-normal"
      v-if="showContinueReadingButton"
    >
      Read an excerpt
    </h2>
    <div>
      <div ref="titleVisibilityHandle"></div>

      <p class="h3 md:h2 md:my-8 -mb-4 md:mb-0">Chapter One</p>

      <p class="h4 md:h3">A New Normal</p>
      <p>
        <em>
          It is now 3:45 p.m. Gail whispering about how bad I am.
          <br class="hidden md:block" />
          She just whispered, "I have to get out of here".
        </em>
      </p>
      <p
        class="first-letter:float-left first-letter:w-[35px] first-letter:pr-12 first-letter:text-4xl first-letter:leading-[90px]"
      >
        I stood quiet by her bedside. Dim morning shadows played at her
        eyelashes and gentle lines of her face. Soft whispered breaths counted
        out the rise and fall of her chest. I'd been standing there for some
        time and realized I was breathing in sync with her. This was my Gail,
        wife and mother to our children, my beautiful best friend, my queen. She
        was so peaceful and still, so like herself. I could almost pretend she
        was just as she ever was. That we were not really at Victory Center, but
        back in our family home, experiencing life just as we always had.
      </p>
      <p>She opened her eyes, and the dream was gone.</p>
      <p>
        "Who are you?" she asked, her voice clear. Sometimes it was clearest
        when her memory was far from clear. But I would take a few unscrambled
        words from her, whenever they came.
      </p>
      <p>
        "I'm your husband, Richard." I smiled wide, hoping my cheerfulness might
        crack the shell.
      </p>
      <p>"Oh," was her answer. Her eyes glared suspicion.</p>
      <p>
        "Let's get you up, Gail." I took a breath and moved to place a gentle
        hand on her shoulder. She recoiled from my touch.
      </p>
      <p>"I'm Gail!" she corrected me.</p>
    </div>
    <div
      v-if="showContinueReadingButton"
      class="absolute inset-x-0 bottom-0 flex h-[150px] items-end bg-gradient-to-t from-primary-2 from-20%"
    >
      <NuxtLink class="button" to="/excerpt">Continue Reading</NuxtLink>
    </div>
    <p>
      "That's what I… That's right. You're Gail, and I'm Richard, your husband.
      Remember?"
    </p>
    <p>"Oh." Eyes still glaring.</p>
    <p>"Come on, Gail. It's time for breakfast. Are you hungry?"</p>
    <p>
      I reached below the blanket for her hand but was too slow. She yanked free
      and a sneaker met the side of my head, stunning me for a moment. I stepped
      back and shook my head trying to clear the fog that briefly clouded my
      thoughts. Taking a deep breath, I consciously centered myself, trying to
      regain composure. How difficult it must be, falling asleep confused, only
      to awaken and discover a stranger in your bedroom. The thought hurt me,
      for her as much as me. It served as a reminder of the challenges and
      hardships we faced in our current circumstances.
    </p>
    <p>
      I threw up my hands in mock surrender and gave a lighthearted smile. At
      least it wasn't a knife; I lifted a quick prayer of gratitude. Thankfully,
      so far, we'd left those disturbing behaviors behind at Hunt Club. Still, I
      reminded myself not to start Gail's day within swinging range.
    </p>
    <p>
      "Alright," I said in my calmest tone, as I observed her picking up another
      shoe. "That's ok. We can take our time. Why don't you give me the shoe,
      and we can—?"
    </p>
    <p>
      "What?" Gail's scowl gave way to confusion. She stared at the object in
      her hand like someone else had put it there, then set it on the bed,
      shaking her head and muttering sounds that weren't words, at least not
      ones I understood. When her eyes found mine, they were full of Gail's
      essence again.
    </p>
    <p>
      "My husband," she said, with a touch of emotion in her voice like she had
      just returned from a long trip.
    </p>
    <p>My eyes dampened. "That's right," I said.</p>
    <p>
      She reached for my hand and pulled me down into a hug. She was so strong.
      She always had been, in so many ways, stronger than me. She hadn't lost
      that.
    </p>
    <p>
      We remained locked in each other's embrace until I felt one of our
      stomachs rumbling, reminding me of the breakfast I'd heated growing cold
      now in the microwave. Before we could get to that, Gail needed cleaning.
      She let me help her out of bed, and to my relief, the mess was not as bad
      as it often was. There was a con to that. Her digestion had taken a
      downward turn over the last week. Constipation had her uncomfortable in
      ways she could no longer say with words. Instead, worsening behavior
      showed me how she felt. I would have welcomed more to clean up that
      morning if it meant more relief for my Gail. Even so, I thanked God for
      that little reprieve.
    </p>
    <p>
      In the shower, Gail was helpful, playful even—a welcome surprise. I hadn't
      stopped being a man after all, even if my wife didn't remember me half of
      each day. I longed for affection. The smallest gestures; a pat on the
      shoulder, the touch of her hands cupping my face, even a fleeting smile,
      was enough during the emotional droughts. These acts of tenderness were
      like warm food to a grateful beggar.
    </p>
    <p>
      After she was cleaned and dressed, I led her to our small dining table
      beneath the window, and she gifted me a smile. I left for our kitchenette
      to reheat her breakfast. In that moment, my thoughts drifted to the
      dedicated staff who worked tirelessly downstairs, as the microwave plate
      spun and hummed in the background. The dining hall kitchen was a short
      trip down one flight of stairs, one of the many unexpected blessings of
      moving from Hunt Club Apartments to Victory Center. I wasted no time
      making friends with the kitchen staff. Theirs was a thankless job,
      particularly in a place like this, as I witnessed day in and day out.
      Whenever I remembered, I told them how important they were to us,
      emphasizing the profound positive impact they had on my wife's quality of
      life. If my friendliness encouraged them to be extra generous with
      portions and attentive to special orders for Gail, that was just fine.
    </p>
    <p>
      "Who are these people?" Gail murmured, pulling me back to the present.
    </p>
    <p>
      I paused in front of our microwave. "I'm your husband, Richard," I said,
      more exploratory than an answer. I braced for what would come next.
    </p>
    <p>
      She froze. No response, not even a simple turn of the head. Gone again,
      she muttered beneath her breath to no one, no one visible at least. Since
      arriving at Victory Center, there had been less of the paranoid behavior
      and violence—the sneaker incident that morning, itself an outlier, was a
      far cry from the worst behaviors at Hunt Club.
    </p>
    <p>
      That was near the beginning of it all, our first attempt at life after the
      signs began. It was a good place. Our apartment was big enough and we
      could afford it. There was a small library, a recreation center with
      activities and other like-minded people we connected with. I thought it
      would be a place Gail and I could comfortably retire in. I was so naïve.
      Within months of moving into Hunt Club, I got my first glimpse of just how
      challenging our future would become when I returned home and found my wife
      brandishing a knife.
    </p>
    <p>
      "Gail, are you ok?" Fear gripped me as I considered the possibility that
      someone had attempted to gain unauthorized access while I was at the
      store.
    </p>
    <p>
      I rushed to take the knife and hold her, but instead of melting into the
      safety of her husband's arms, Gail thrust the knife toward me. I stopped
      in my tracks, directing my gaze towards the weapons point, and in that
      moment, an intense pang of anguish pierced my heart. Had she not backed
      away in fear as she defended herself, that might have been our final day
      together. Our situation was never the fault of Hunt Club. They were merely
      an apartment complex tailored for independent seniors. What we needed was
      help.
    </p>
    <p>
      The microwave dinging brought me back to Victory Center and the gloriously
      less exciting life we now lived. As I stirred her scrambled eggs and cream
      of wheat, my attention remained divided, with one eye always on her.
      During breakfast, I no longer felt like Richard, the husband. I'd become
      Richard, the intruder, an unwelcome presence in a world inhabited solely
      by Gail and her invisible co-conspirator. I wondered why her disease took
      her there. Was it safe from the real world she no longer understood? Oh, I
      wished to have her back. That wasn't the real world either. The familiar
      reality we had always relied on, was fading away.
    </p>
    <p>
      I understood little that she said when she was "away." Most seemed to be
      about whoever she thought I was. Occasionally, a few clear words would
      slip through. Sometimes I was accused by name or as "him" or "the man." If
      ever she called this villain "Richard" to her invisible accomplice, and I
      broke the stream of muttering with a "That's me!", a sideways glower was
      her stock punishment. Sometimes I knew who she spoke to. A stray name or
      clue would surface from her mumbles. They were usually a family member,
      her sister, or mother. Others I didn't recognize—Charlie was common. I
      never learned who that was. This morning, there was no name, and that was
      common also.
    </p>
    <p>
      After a spell, her disgruntled conversation fell away and hunger gradually
      stole her focus. As she turned her attention to her plate, I seized the
      moment to engage her, attempting to bridge the divide between us.
    </p>
    <p>"How are you feeling, Gail?", hopeful for a response.</p>
    <p>
      She didn't acknowledge me, not even a fleeting glance. I nodded. I was
      still the villain. But she was still my bride and I would always care for
      her, regardless of whether she welcomed it or even recognized it.
    </p>
    <p>
      That delicate balance was always on my mind. I watched her eat, landing
      one spoonful out of three, the others finding shirt or lap, or back onto
      the plate or table. Should I step in? A question I wondered at every meal.
      Nutrition was vital, and every bite lost was full of valuable calories and
      nutrients. Was it worth peeling away another layer of her already fragile
      independence?
    </p>
    <p>
      I let her find her own way through breakfast and was proud at how much she
      managed to get down. That was a good sign, so the experts told me. In
      situations like these, constipation tended to worsen with age, and
      appetite served as a reliable indicator for those who were unable to
      express themselves with words. I clung to the hope that her digestive
      system would soon find relief. Hopefully, there would be a positive shift
      in her mood as well.
    </p>
    <p>
      I took her empty plate, and she resumed conversation with our unseen
      guest, pausing only when I came back for her napkin and to wipe up. I took
      her hand, which she received like a prisoner accepting cuffs, and guided
      her to the recliner, her favorite seat. I sat nearby. Her chatter started
      again; more mumblings broken by occasional clarity. Complete sentences had
      become increasingly rare, an absence that pained me deeply. We had always
      talked through problems, enjoyed the many profound and mundane topics
      married couples often engage in. We leaned on each other in hard times and
      shared each other's joys during the good ones. There were plenty of both,
      and we were stronger for all of it; we were stronger when we were
      together. How much I would have given just to ask what she needed and have
      her tell me in simple words. Communication, once taken for granted, became
      an unattainable treasure.
    </p>
    <p>
      Over the next hour or so, I might not have been present at all for the
      little Gail noticed me. At times, she was serious—long stretches of
      scrunched eyes and noises which sounded aimed more than communicated. Then
      something would switch. Laughter would brighten her face and she would sit
      up taller in her chair, smiling, sharing some pleasant memory I hoped was
      of me. This continued that day until her therapist arrived in the early
      afternoon. I usually stayed as she worked with Gail. Any clue from these
      sessions, a new way to communicate, might unlock some small improvement in
      our quality of life. But our fridge was nearly empty, so while another
      cared for her, I left for provisions.
    </p>
    <p>
      Forty-five minutes later, I returned. My hands were full as I paused
      outside the door listening. There was nothing. No sounds. No clues to what
      I might find inside. The bags crinkled around my wrist as I turned the
      knob, peered through the opening, and found a changed Gail.
    </p>
    <p>
      "There's my husband!" a familiar voice greeted me as I used my butt to
      push open the door.
    </p>
    <p>
      I don't think I could have stopped myself from smiling if I tried. I set
      the bags down in the entrance and walked to my wife, as she took up the
      last remaining step between us. As we embraced, she whispered "I missed
      you" in my ear, in the way she had done so many times throughout our life.
      There might not have been more from her in those words than a simple lucid
      moment—the normal response to her husband returning from a quick trip to
      the store. But I felt the weight of years. I closed my eyes and told her I
      missed her too, and held her tight like I would never let her go.
      Eventually, I leaned back and took in the sight of my wife, enjoying every
      detail that made her uniquely beautiful to me. She smiled at me and said,
      "I'm hungry."
    </p>
    <p>
      The upturned mood was still there when I returned from the dining hall and
      placed lunch on the table. I asked if she liked each thing on the plate,
      and she smiled and nodded her approval.
    </p>
    <p>"How do you like the sweet potatoes?"</p>
    <p>
      "Very good," she said—the same answer given of the sliced pork and the
      apple crisp. Lunch crescendoed to the tune of a clear-as-day "Thank you,"
      as I picked up her empty plate." I swiftly attended to the dishes, my
      aging fingers moving with a sense of urgency, and rushed back to her side.
      She looked up at me, and a different face had replaced my Gail's. It
      happened so fast.
    </p>
    <p>
      This face was not new, it had become a constant dark shadow at Hunt Club.
      Twisted and contorted—someone seeing this for the first time might believe
      they were seeing a demonic possession.
    </p>
    <p>
      There were so many versions of Gail throughout her dementia journey. A
      version would break through, stirring memories of my precious wife,
      transporting me to better years. Others… I couldn't imagine where they
      came from—primal, awful fits of rage that would engulf her, removing any
      resemblance to the wife I knew, replacing her with something I couldn't
      know.
    </p>
    <p>
      I pushed through the pain, a metaphorical knife twisting in my stomach,
      and forced a smile as I asked this distorted version of Gail if there was
      anything she needed
    </p>
    <p>"Bad…" she croaked. "Always bad to me…"</p>
    <p>
      The rest of the afternoon was another set of highs and lows, each one
      higher or lower than before. Laughter was no longer soft and glowing but
      teetered on the edge of hysteria. Hostile shouting replaced the previous
      irritated grumbling. These turbulent waves of behavior battered us
      throughout the day. Upon returning from a trip to the bathroom, I found
      her chair vacant. I turned just in time to avoid the incoming assault of
      my own shoe, which fortunately missed its mark. A state of frantic
      dishevelment and agitation had taken Gail. Her blouse was on backwards,
      pants missing, and the partner to my shoe clung loosely to one of her
      feet. I had been gone less than five minutes.
    </p>
    <p>
      I navigated through the chaos, steering my wife away from various tripping
      hazards. A broken bone was my primary concern. Eventually, I managed to
      retrieve the other shoe from her vice-like grip and guided her back to her
      recliner. She and her mood sank together, deep into the cushions.
    </p>
    <p>A sullen breath escaped her. "I have to get out of here."</p>
    <p>
      I called one of the CNAs for backup, a luxury I needed so many times, but
      never had at Hunt Club. They were there within a quarter of an hour and
      with no small effort, gave her an antipsychotic tranquilizing pill. She
      resisted, irate and frightened. If it wasn't for the adrenaline, I'm sure
      I would have openly sobbed.
    </p>
    <p>
      I had mixed feelings about the use of these medications. I believed they
      were worsening her memory, her communication, and increasing the
      ever-present risk of falling. But in those unsettling moments the drugs
      reduced Gail's hallucinations and severe agitation. What else could I do?
      I was desperate.
    </p>
    <p>
      Her mood returned to a sleepier version of this "new normal," and we
      avoided the need for personal restraints. I felt the weight of not knowing
      if there was some better way. Oh, how I wished Gail could tell me that
      what I was doing was right.
    </p>
    <p>
      By the time the sun peeked through the window that afternoon, my Gail had
      made another return—sleepy, lucid, smiling at me from the sofa. She
      allowed me to kiss her. I yearned for so much more than that. I wanted to
      shower her with affection and hold onto her tight and never let her slip
      away again. But I knew I couldn't keep her there. That was not up to me. I
      stayed still in that quiet, sweet moment trying not to disturb it, like a
      hiker watching a shy doe. My doe stayed with me that evening. She stayed
      until she nodded off and slept peacefully on the sofa until well after
      dark. I gladly let her rest undisturbed.
    </p>
    <p>
      Just before retiring to bed myself, the nurses arrived to help Gail change
      into her pajamas and administer her medications. She asked for a hug, and
      as I did, silent tears escaped my guard. Within a few moments, Gail's
      breathing grew heavy, mirroring the peaceful rhythm it had earlier that
      morning. A break in this chaotic world she resided in. I crawled into my
      own bed beside hers and fought sleep, wanting to never leave this moment.
    </p>
    <p>
      Later, I woke expecting to check on Gail in the dark as usual but instead,
      I was greeted by a sliver of light shining through the bedroom window. I
      had slept in, a rare occurrence. It felt good…but only for a moment.
      Realization that I hadn't helped Gail with any middle-of-the-night
      bathroom activity flooded my groggy consciousness, a disaster was likely
      waiting for me.
    </p>
    <p>
      Scanning her bed, I found blankets thrown off and only a pajama top
      covering her. Her bottoms were missing. I crept past her sleeping frame
      and braced for the inevitable mess, a kind that would involve every room
      as Gail wandered in search of the bathroom. An article of clothing caught
      my attention, an empty pajama leg drawing me to the open bathroom door.
      There, I found them lying dejected on the floor; no mess, no smell came
      from them. But an odor lingered in the air, and I glanced in the open
      toilet bowl. A smile of relief crossed my face. She was finally turning a
      corner, and the proof was floating, solid in the water. I couldn't
      restrain myself saying aloud, "It is going to be a great day. What a
      lovely wife I have."
    </p>
    <p>
      When I looked back, Gail was still sleeping peacefully in her bed. I
      cracked open my new journal and began scratching down the events of the
      previous day. Rarely was there a spare moment to document this journey,
      but I wasn't complaining. I was in this boat with Gail, clutching the oars
      tightly as we surrendered to the currents, seen and unseen.
    </p>
    <aside class="mt-24 text-center">
      “My frame was not hidden from you when I was made in the secret place,
      when I was woven together in the depths of the earth. Your eyes saw my
      unformed body; all the days ordained for me were written in your book
      before one of them came to be.” Psalm 139:15-16
    </aside>
  </div>
</template>
