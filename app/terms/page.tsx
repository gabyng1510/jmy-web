import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "terms · jmy",
  description: "the house rules for jmy — plain english, no jargon.",
};

export default function TermsPage() {
  return (
    <LegalShell
      kicker="the house rules"
      title="terms of service."
      banner="not a Real Company™ yet. these are the house rules — when jmy incorporates, lawyers will rewrite them. until then: be cool."
      updated="may 2026"
    >
      <Section n="01" title="getting in">
        <ul>
          <li>jmy is free.</li>
          <li>
            you need to be <strong>18+</strong>. we ask at sign-up. lying gets your account closed, no second chances.
          </li>
          <li>sign in is apple only. one account per human.</li>
          <li>
            if you’ve been convicted of a sexual offense, you can’t use jmy. full stop.
          </li>
        </ul>
      </Section>

      <Section n="02" title="your stuff">
        <ul>
          <li>it’s yours. you own your photos, bio, statuses, handles.</li>
          <li>
            by posting, you let us show your stuff inside the app so other users can see it. that’s the only thing we do with it.
          </li>
          <li>
            don’t post other people’s stuff, don’t impersonate anyone, don’t use jmy for spam / scraping / marketing lists. handles you grab from mutuals are for actual human conversation — not for blasting cold dms.
          </li>
        </ul>
      </Section>

      <Section n="03" title="what gets you banned">
        <ul>
          <li>harassment, hate speech, threats.</li>
          <li>
            <strong>sexual content involving minors</strong> → instant ban + we report to authorities.
          </li>
          <li>nudity, gore, drugs, weapons in photos.</li>
          <li>impersonation, fake accounts, scraping.</li>
          <li>using jmy as a free ad platform (paid promotions, commercial outreach, growth-hacking).</li>
          <li>sharing other people’s private info without consent.</li>
        </ul>
        <p>
          we screen content (thehive.ai handles the first pass) and we read every report. enforcement scales with the offense: warning → content yanked → suspension → permanent ban. severe stuff (anything involving minors) skips straight to ban + report.
        </p>
      </Section>

      <Section n="04" title="what happens after you grab a handle">
        <ul>
          <li>
            jmy ends at the handle reveal. whatever happens on instagram / snapchat / tiktok or irl is between you two — we can’t see it, we can’t moderate it.
          </li>
          <li>
            <strong>use your head</strong>: don’t send money to strangers, meet in public the first time, trust your gut. we’re not responsible for what happens off-platform.
          </li>
        </ul>
      </Section>

      <Section n="05" title="leaving + getting kicked out">
        <ul>
          <li>delete any time: settings → delete account. instant + permanent.</li>
          <li>
            we can suspend or close your account if you break these rules. we’ll tell you why; you can push back at <a href="mailto:safety@jmy.app">safety@jmy.app</a>.
          </li>
          <li>ghost the app for 24 months and we’ll delete it for you.</li>
        </ul>
      </Section>

      <Section n="06" title="the small print (still plain english)">
        <ul>
          <li>
            jmy is <strong>“as-is.”</strong> we try to keep things running but no promises about uptime, bugs, or awkward conversations.
          </li>
          <li>we’re not liable for what other humans do — on jmy or off it.</li>
          <li>
            if these rules change in any meaningful way, you’ll see it in the app first.
          </li>
        </ul>
      </Section>

      <Section n="07" title="reach us">
        <p>
          <a href="mailto:hello@jmy.app">hello@jmy.app</a> for general stuff ·{" "}
          <a href="mailto:safety@jmy.app">safety@jmy.app</a> for reports + off-platform incidents.
        </p>
      </Section>
    </LegalShell>
  );
}
