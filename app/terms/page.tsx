import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "terms of service · jmy",
  description: "the terms that govern your use of jmy.",
};

export default function TermsPage() {
  return (
    <LegalShell
      kicker="terms"
      title="terms of service."
      updated="may 2026"
      intro={
        <>
          <p>
            these terms of service (the “terms”) govern your access to and use
            of the <strong>jmy</strong> mobile application and the website at
            jmy.app (together, the “service”). by creating an account or
            otherwise using the service, you accept these terms and agree to be
            bound by them.
          </p>
          <p>
            jmy is a discovery platform for meeting people. connection between
            users completes when social-media handles are exchanged;
            conversation continues on the third-party platform of your choice.
            jmy does not provide an in-app messaging surface.
          </p>
          <p>
            please read these terms carefully. if you do not agree to them, do
            not use the service.
          </p>
        </>
      }
    >
      <Section n="01" title="who can use jmy">
        <ul>
          <li>
            <strong>age.</strong> jmy is strictly an 18+ service. you must be
            at least 18 years old to create an account. providing a false date
            of birth is a material breach of these terms and will result in
            account closure.
          </li>
          <li>
            <strong>capacity.</strong> you must have the legal capacity to
            enter into a binding agreement in your jurisdiction.
          </li>
          <li>
            <strong>eligibility.</strong> you may not use jmy if you have
            previously been removed from the service for a serious violation,
            or if you have been convicted of a sexual offence or any offence
            against a minor.
          </li>
          <li>
            <strong>one account per person.</strong> sign-in is via sign in
            with apple. one account per individual; we may suspend duplicate
            accounts.
          </li>
        </ul>
      </Section>

      <Section n="02" title="your account">
        <p>
          you are responsible for keeping your sign-in credentials and the
          device used to access your account secure. you must promptly inform
          us at <a href="mailto:safety@jmy.app">safety@jmy.app</a> if you
          suspect unauthorised access to your account.
        </p>
        <p>
          all profile information you submit must be accurate, current, and
          relate to you personally. impersonation of another person, use of
          someone else’s photograph, or any attempt to misrepresent your
          identity is prohibited.
        </p>
      </Section>

      <Section n="03" title="the service">
        <p>
          jmy is provided free of charge at the date of these terms. we do not
          currently offer paid features or in-app purchases. if we introduce
          paid functionality in the future, we will publish updated terms
          describing the pricing model and your rights before that
          functionality becomes available to you.
        </p>
      </Section>

      <Section n="04" title="your content">
        <p>
          you retain all rights you have in the content you submit to jmy
          (your photos, bio, status posts, and any other material you upload —
          your “user content”).
        </p>
        <p>
          by submitting user content, you grant jmy a worldwide,
          royalty-free, non-exclusive, sublicensable licence to host, store,
          reproduce, display, adapt (only to the extent technically necessary
          — for example, resizing for different screen sizes), and distribute
          that user content for the sole purpose of operating, promoting, and
          improving the service. this licence terminates when you remove the
          user content or delete your account, except where retention is
          necessary for safety, legal, or backup reasons (and in those cases
          retention is limited to the period strictly required).
        </p>
        <p>
          you represent and warrant that you own the user content you submit
          or that you have all rights necessary to grant the licence above,
          and that your user content does not infringe any third-party right.
        </p>
      </Section>

      <Section n="05" title="acceptable use">
        <p>
          you must not use the service to do any of the following, and you
          must not assist or permit any other person to do them either:
        </p>
        <ul>
          <li>
            harass, threaten, intimidate, dox, or incite hatred or violence
            against any person or group.
          </li>
          <li>
            publish, transmit, or solicit any sexually explicit content
            involving a minor. this is an absolute prohibition; offending
            accounts will be permanently banned and reported to the relevant
            authorities.
          </li>
          <li>
            publish nudity, sexually explicit content, gore, content depicting
            illegal acts, weapons, or recreational-drug promotion.
          </li>
          <li>
            impersonate another person, create fake accounts, or
            misrepresent your affiliation with any individual or
            organisation.
          </li>
          <li>
            scrape, harvest, or otherwise extract data from the service by
            automated means, or attempt to reverse-engineer, decompile, or
            disassemble any part of the service.
          </li>
          <li>
            use the service for commercial purposes — including paid
            promotions, marketing outreach, lead generation, recruiting,
            multi-level-marketing, or any other commercial solicitation —
            without our prior written consent.
          </li>
          <li>
            disclose another user’s private or identifying information
            without their consent.
          </li>
          <li>
            interfere with, disrupt, or circumvent any security, rate-limit,
            or moderation feature of the service.
          </li>
        </ul>
        <p>
          we screen content using automated classifiers (currently hive ai)
          and review user reports through a combination of automated and
          human review. enforcement is proportionate to the severity of the
          violation and follows an escalating ladder: warning, content
          removal, temporary suspension, permanent termination. serious
          violations — including any content involving minors, threats of
          violence, or coordinated abuse — bypass the ladder and result in
          immediate termination.
        </p>
      </Section>

      <Section n="06" title="reporting and moderation">
        <p>
          every profile in the discovery surface has a report flow accessible
          via the in-app menu. you may also report content or conduct by
          email to <a href="mailto:safety@jmy.app">safety@jmy.app</a>.
        </p>
        <p>
          we acknowledge reports promptly and aim to take action within 48
          hours of receipt. for severe content, action is taken immediately
          on detection. we may, where appropriate and lawful, notify the
          reporting user of the action taken. repeated submission of reports
          known to be unfounded may itself constitute a breach of these
          terms.
        </p>
      </Section>

      <Section n="07" title="off-platform interactions">
        <p>
          the service ends at the point a social-media handle is exchanged.
          we have no visibility into, and assume no responsibility for, any
          interaction that takes place on instagram, snapchat, tiktok, or any
          other third-party platform, nor for any in-person meeting that may
          follow.
        </p>
        <p>
          you are solely responsible for the safety, lawfulness, and
          appropriateness of your off-platform interactions. we strongly
          recommend that, when meeting in person for the first time, you do
          so in a public place and inform a trusted contact of your plans.
          never send money or other valuables to a person you have not met,
          and do not share financial, identity, or location information you
          would not want to be public.
        </p>
      </Section>

      <Section n="08" title="intellectual property">
        <p>
          the service, including its name, design, source code, trademarks,
          and all related materials (other than user content), is owned by
          jmy or its licensors and is protected by copyright, trademark, and
          other applicable laws.
        </p>
        <p>
          we grant you a personal, non-exclusive, non-transferable,
          revocable licence to access and use the service for your own
          personal, non-commercial use, in accordance with these terms. all
          other rights are reserved.
        </p>
      </Section>

      <Section n="09" title="suspension and termination">
        <p>
          we may suspend or terminate your account, in whole or in part, at
          our discretion, if (a) you breach these terms or our acceptable-use
          rules, (b) we are required to do so by law or regulatory order, or
          (c) we determine in good faith that your continued use of the
          service presents a material risk to the safety of other users or to
          the integrity of the service. where the circumstances permit, we
          will explain the reason for the action and provide a mechanism to
          appeal at <a href="mailto:safety@jmy.app">safety@jmy.app</a>.
        </p>
        <p>
          you may terminate these terms at any time by deleting your account
          (<em>settings → delete account</em>). deletion is immediate and
          permanent and results in the removal of your profile, photos,
          status posts, reactions, mutuals, blocks, and push token from our
          live systems; certain records may be retained as described in our
          privacy policy.
        </p>
      </Section>

      <Section n="10" title="disclaimers">
        <p>
          to the maximum extent permitted by applicable law, the service is
          provided <strong>“as is” and “as available”</strong>, without any
          warranty of any kind, whether express, implied, statutory, or
          otherwise. we expressly disclaim all implied warranties of
          merchantability, fitness for a particular purpose, non-infringement,
          and quiet enjoyment.
        </p>
        <p>
          we do not warrant that the service will be uninterrupted, secure,
          or error-free, that defects will be corrected, or that any content
          obtained through the service is accurate or reliable. we make no
          representation regarding the identity, intentions, or conduct of
          any other user. you interact with other users at your own risk.
        </p>
      </Section>

      <Section n="11" title="limitation of liability">
        <p>
          to the maximum extent permitted by applicable law, in no event
          shall jmy, its directors, employees, contractors, or licensors be
          liable for any indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for any loss of profits,
          revenue, data, goodwill, or other intangible losses, arising out of
          or in connection with your use of (or inability to use) the
          service.
        </p>
        <p>
          where liability cannot be excluded by applicable law, our
          aggregate liability for any claim arising from or related to the
          service is limited to one hundred us dollars (us$100). nothing in
          these terms limits liability that cannot be limited under
          applicable law, including liability for gross negligence, wilful
          misconduct, fraud, or death or personal injury caused by our
          negligence.
        </p>
      </Section>

      <Section n="12" title="changes to these terms">
        <p>
          we may revise these terms from time to time. material changes will
          be communicated in advance through an in-app notice and, where
          appropriate, by email. the “last updated” date above indicates the
          effective date of the current version. by continuing to use the
          service after that date, you accept the revised terms; if you do
          not accept them, you should stop using the service and delete your
          account.
        </p>
      </Section>

      <Section n="13" title="governing law and disputes">
        <p>
          these terms are governed by the laws of the jurisdiction in which
          the jmy operating entity is established at the time of any
          dispute. until the operating entity is formally incorporated,
          these terms shall be interpreted under the laws of the country in
          which the user resides, with mandatory consumer-protection
          provisions of that jurisdiction taking precedence where they would
          otherwise be limited.
        </p>
        <p>
          before initiating any formal proceeding, you agree to first contact
          us at <a href="mailto:hello@jmy.app">hello@jmy.app</a> with a
          description of the dispute and to attempt in good faith to resolve
          it informally. this clause does not prevent you from seeking
          interim or injunctive relief from a competent court at any time.
        </p>
      </Section>

      <Section n="14" title="general">
        <p>
          if any provision of these terms is held to be unenforceable, the
          remaining provisions shall remain in full force and effect. our
          failure to enforce any right or provision shall not constitute a
          waiver of that right or provision. these terms constitute the entire
          agreement between you and jmy concerning the service and supersede
          any prior agreement on the same subject matter.
        </p>
      </Section>

      <Section n="15" title="contact">
        <p>
          general enquiries:{" "}
          <a href="mailto:hello@jmy.app">hello@jmy.app</a>.
        </p>
        <p>
          safety, moderation, or off-platform incidents:{" "}
          <a href="mailto:safety@jmy.app">safety@jmy.app</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
