import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "privacy · jmy",
  description: "plain-english privacy policy for jmy.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      kicker="the data stuff"
      title="privacy, in plain english."
      banner="we’re not a Real Company™ yet — when we are, lawyers will rewrite this. until then: here’s what jmy actually does with your data, no jargon."
      updated="may 2026"
    >
      <Section n="01" title="what we grab">
        <ul>
          <li>
            <strong>sign in with apple</strong> — we get an apple user id and an email (usually apple’s proxy version).
          </li>
          <li>
            <strong>the stuff you tell us</strong> — name, birthdate, gender, who you’re looking for, at least one photo, at least one handle (insta / snap / tiktok), a bio if you want one, city + rough gps if you say yes.
          </li>
          <li>
            <strong>your status posts</strong> — kept as a history. even after you replace one, the old one stays on our side until you delete your account.
          </li>
          <li>
            <strong>boring tech stuff</strong> — ip, device model, app version, crash logs, push token (only if you let us notify you).
          </li>
          <li>
            <strong>anything you send to support</strong> — reports you file, replies to safety@jmy.app, etc.
          </li>
        </ul>
      </Section>

      <Section n="02" title="what we don’t grab">
        <ul>
          <li>
            <strong>no in-app chat.</strong> jmy doesn’t even have a messaging surface. once you grab someone’s handle, the conversation moves to insta / snap / tiktok — their privacy policies apply there, not ours.
          </li>
          <li>
            <strong>no ads. no third-party trackers. no cookies on this site.</strong>
          </li>
          <li>
            <strong>no payment info.</strong> the app is free.
          </li>
        </ul>
      </Section>

      <Section n="03" title="why we have it + who sees it">
        <ul>
          <li>
            <strong>to make jmy work</strong> — discovery, reactions, mutuals, push notifications.
          </li>
          <li>
            <strong>to keep it safe</strong> — we screen photos and text for harmful stuff (currently <a href="https://thehive.ai" target="_blank" rel="noreferrer">thehive.ai</a> — they classify, they don’t keep).
          </li>
          <li>
            <strong>the vendors who help us</strong> — apple (sign-in + push), google cloud storage (your photos), thehive.ai (moderation). that’s the whole list.
          </li>
          <li>
            <strong>we don’t sell your data.</strong> we’d say so if we did.
          </li>
          <li>
            <strong>when handles get revealed</strong> — once a mutual reaction happens, your handle is shared with that other person. what they do with it is on them; jmy isn’t watching their dms.
          </li>
        </ul>
      </Section>

      <Section n="04" title="how long we keep it + how to nuke it">
        <ul>
          <li>your stuff stays as long as you do.</li>
          <li>
            delete it any time: <strong>settings → delete account.</strong> instant + permanent. no soft-delete, no “are you sure?” purgatory.
          </li>
          <li>
            on delete: photos gone from storage, reactions gone, mutuals gone, blocks gone, push token gone, statuses gone. reports you filed go too. reports filed against you stay for moderation history, but your name comes off them.
          </li>
          <li>if you ghost us for 24 months, we delete the account for you.</li>
        </ul>
      </Section>

      <Section n="05" title="your rights (the boring-but-important part)">
        <ul>
          <li>
            <strong>see</strong> what we have on you — email us.
          </li>
          <li>
            <strong>fix</strong> anything wrong — edit it in the app, or email us.
          </li>
          <li>
            <strong>delete</strong> everything — settings → delete account (instant), or email us.
          </li>
          <li>
            eu / uk / california crowd: you have the standard gdpr / ccpa rights. email us and we’ll sort it out.
          </li>
        </ul>
      </Section>

      <Section n="06" title="reach us">
        <p>
          <a href="mailto:privacy@jmy.app">privacy@jmy.app</a> for data stuff ·{" "}
          <a href="mailto:safety@jmy.app">safety@jmy.app</a> for reports + off-platform incidents.
        </p>
        <p>
          if anything material changes, you’ll see it in the app first. promise.
        </p>
      </Section>
    </LegalShell>
  );
}
