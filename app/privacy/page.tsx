import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/Legal";

export const metadata: Metadata = {
  title: "privacy policy · jmy",
  description:
    "how jmy collects, uses, shares, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      kicker="privacy"
      title="privacy policy."
      updated="may 2026"
      intro={
        <>
          <p>
            this privacy policy explains how <strong>jmy</strong> (the “service”,
            “we”, “us”) collects, uses, shares, retains, and protects your
            personal data when you use the jmy mobile application or this
            website (jmy.app).
          </p>
          <p>
            we built jmy as a discovery platform for meeting people you
            wouldn’t otherwise meet. the connection ends when you and another
            user exchange social-media handles — actual conversation happens on
            instagram, snapchat, tiktok, or whichever platform you both prefer.
            we do not provide an in-app messaging surface and we do not see or
            store the conversations you have off-platform.
          </p>
          <p>
            we are committed to processing personal data in accordance with the
            eu general data protection regulation (gdpr), the uk gdpr, the
            california consumer privacy act (ccpa/cpra), and other applicable
            data-protection laws.
          </p>
        </>
      }
    >
      <Section n="01" title="who we are">
        <p>
          jmy is currently operated by the project owner directly. a corporate
          entity is being formed; once incorporation completes, this section
          will be updated to identify the controller (legal name, registration
          number, and registered address) and a successor entity will assume
          all rights and obligations under this policy.
        </p>
        <p>
          for any privacy-related question, contact us at{" "}
          <a href="mailto:privacy@jmy.app">privacy@jmy.app</a>.
        </p>
      </Section>

      <Section n="02" title="data we collect">
        <h3>2.1 data you provide directly</h3>
        <ul>
          <li>
            <strong>authentication</strong> — when you sign in with apple, we
            receive an apple user identifier and (depending on your apple
            preference) either your real email address or apple’s relay email.
          </li>
          <li>
            <strong>profile</strong> — first name, date of birth, gender,
            preferred audience, at least one photo, at least one social-media
            handle (instagram, snapchat, and/or tiktok), and an optional bio.
          </li>
          <li>
            <strong>location</strong> — your approximate city and coarse gps
            coordinates, only if you grant location permission. you can revoke
            this at any time in your device settings.
          </li>
          <li>
            <strong>status posts</strong> — any photo or short text you publish
            as a “status”. we retain a per-user history of past statuses for
            integrity and moderation review.
          </li>
          <li>
            <strong>support and reports</strong> — any message, attachment, or
            report you submit through the in-app reporting flow or to one of
            our email addresses.
          </li>
        </ul>

        <h3>2.2 data collected automatically</h3>
        <ul>
          <li>
            <strong>device and technical data</strong> — device model,
            operating system version, app version, language, time zone, ip
            address, crash logs, and diagnostic events.
          </li>
          <li>
            <strong>push token</strong> — the apple push notification token
            associated with your device, only if you grant notification
            permission. used solely to deliver push notifications related to
            your account.
          </li>
          <li>
            <strong>usage data</strong> — actions you take inside the app
            (profiles viewed, reactions sent, mutuals formed, blocks issued)
            for the strict purpose of operating discovery, computing mutuals,
            and improving the service.
          </li>
        </ul>

        <h3>2.3 data we do not collect</h3>
        <ul>
          <li>
            <strong>no in-app messages</strong> — jmy does not provide a
            messaging surface. once a handle is exchanged, all subsequent
            conversation occurs on third-party platforms whose privacy
            policies apply, not ours.
          </li>
          <li>
            <strong>no advertising identifiers</strong> — we do not collect
            idfa, aaid, or any cross-app advertising identifier.
          </li>
          <li>
            <strong>no payment information</strong> — jmy is free; we do not
            process or store payment data.
          </li>
          <li>
            <strong>no website cookies</strong> — jmy.app does not set
            cookies, run analytics scripts, or embed third-party trackers.
          </li>
        </ul>
      </Section>

      <Section n="03" title="how we use your data">
        <p>
          we process personal data only where we have a valid legal basis under
          gdpr, as detailed below.
        </p>

        <h3>3.1 to operate the service</h3>
        <p>
          to create and maintain your account, present discovery cards, record
          reactions, form mutuals when both users react, deliver push
          notifications, and synchronize your data across devices.
        </p>
        <p>
          <strong>legal basis:</strong> performance of our terms of service
          (contract).
        </p>

        <h3>3.2 to keep the service safe</h3>
        <p>
          to detect and remove harmful content, enforce community rules,
          investigate reports, and prevent abuse. we use automated content
          classifiers (currently hive ai) to screen photos and text before
          publication. human moderators review reports and edge-case
          decisions.
        </p>
        <p>
          <strong>legal basis:</strong> our legitimate interest in operating a
          safe platform, and where applicable our legal obligation to remove
          illegal content.
        </p>

        <h3>3.3 to verify eligibility</h3>
        <p>
          to confirm that users meet the minimum-age requirement of 18 and to
          deter circumvention by users previously removed for serious
          violations.
        </p>
        <p>
          <strong>legal basis:</strong> compliance with our legal obligations
          and our legitimate interest in protecting minors.
        </p>

        <h3>3.4 to communicate with you</h3>
        <p>
          to send service-related notifications (security, policy changes,
          essential updates) and to respond to your support enquiries.
        </p>
        <p>
          <strong>legal basis:</strong> performance of our terms (contract) for
          essential communications; your consent for any non-essential
          notification, revocable at any time in app settings.
        </p>

        <h3>3.5 to comply with legal obligations</h3>
        <p>
          to respond to lawful requests from law-enforcement or regulatory
          authorities, to preserve data where required by law, and to protect
          our rights and the rights of others in legal proceedings.
        </p>
        <p>
          <strong>legal basis:</strong> compliance with a legal obligation.
        </p>

        <h3>3.6 in vital-interest situations</h3>
        <p>
          where we receive a credible report indicating an imminent risk to
          the life or safety of a user or a third party, we may disclose
          relevant information to emergency services or appropriate
          authorities.
        </p>
        <p>
          <strong>legal basis:</strong> protection of vital interests.
        </p>
      </Section>

      <Section n="04" title="how we share your data">
        <p>
          <strong>we do not sell your personal data.</strong> we share data only
          with the parties below and only to the extent necessary for the
          purposes described.
        </p>
        <ul>
          <li>
            <strong>other users</strong> — your profile information (name, age,
            photo(s), bio, city) is visible to other users via the discovery
            surface. your social-media handles are revealed to another user
            only after a mutual reaction. you control which handles you list
            and can remove them at any time.
          </li>
          <li>
            <strong>service providers</strong> — limited categories of vendors
            who process data on our behalf under written agreements, namely:
            apple (sign-in with apple, push notifications), google cloud
            (hosting and object storage), and hive ai (content moderation).
            we keep this list narrow and review it regularly.
          </li>
          <li>
            <strong>legal and safety disclosures</strong> — where required by
            applicable law, court order, or regulatory request, or where we
            believe in good faith that disclosure is necessary to protect the
            rights, property, or safety of jmy, our users, or the public.
          </li>
          <li>
            <strong>successor entities</strong> — if jmy is reorganized,
            acquired, or transferred (in whole or in part), personal data may
            be transferred to the successor as part of that transaction,
            subject to the same protections set out in this policy.
          </li>
        </ul>
      </Section>

      <Section n="05" title="international data transfers">
        <p>
          jmy uses service providers located in the european union and the
          united states. where personal data is transferred from the eea, the
          uk, or switzerland to a country that has not received an adequacy
          decision, we rely on the european commission’s standard contractual
          clauses (and the uk addendum where applicable) to safeguard the
          transfer. you may request a copy of these safeguards by writing to{" "}
          <a href="mailto:privacy@jmy.app">privacy@jmy.app</a>.
        </p>
      </Section>

      <Section n="06" title="how long we keep your data">
        <p>
          we retain personal data only for as long as necessary to fulfil the
          purposes described in this policy or to comply with our legal
          obligations.
        </p>
        <ul>
          <li>
            <strong>account data</strong> — kept for the lifetime of your
            account. you may delete your account at any time from{" "}
            <em>settings → delete account</em>; deletion is immediate and
            permanent.
          </li>
          <li>
            <strong>status history</strong> — kept until you delete your
            account.
          </li>
          <li>
            <strong>moderation records</strong> — reports that you have
            submitted are deleted with your account. reports submitted against
            you may be retained in pseudonymised form to support pattern
            detection and to defend against legal claims, for up to five years
            from the date of the report.
          </li>
          <li>
            <strong>inactive accounts</strong> — accounts that show no activity
            for 24 consecutive months are deleted automatically. you will
            receive an in-app and email notification before deletion takes
            effect.
          </li>
        </ul>
      </Section>

      <Section n="07" title="data security">
        <p>
          we implement and maintain technical and organisational measures
          designed to protect personal data against unauthorised access,
          alteration, disclosure, or destruction. these include encryption in
          transit and at rest, principle-of-least-privilege access controls,
          server-side request authentication, and regular review of vendor
          security posture. no system is impenetrable; if we become aware of a
          security incident affecting your personal data, we will notify you
          and the appropriate supervisory authority as required by law.
        </p>
      </Section>

      <Section n="08" title="your rights">
        <p>
          depending on your jurisdiction, you have some or all of the
          following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>access</strong> — request a copy of the personal data we
            hold about you.
          </li>
          <li>
            <strong>rectification</strong> — request correction of inaccurate
            or incomplete data.
          </li>
          <li>
            <strong>erasure</strong> — request deletion of your data. you can
            do this directly in <em>settings → delete account</em>.
          </li>
          <li>
            <strong>portability</strong> — receive your data in a structured,
            commonly-used, machine-readable format.
          </li>
          <li>
            <strong>restriction</strong> — request that we restrict processing
            of your data while a request is being reviewed.
          </li>
          <li>
            <strong>objection</strong> — object to processing based on our
            legitimate interests.
          </li>
          <li>
            <strong>withdraw consent</strong> — where processing is based on
            consent, you may withdraw it at any time without affecting the
            lawfulness of processing carried out beforehand.
          </li>
          <li>
            <strong>lodge a complaint</strong> — eea, uk, or swiss residents
            may file a complaint with their local data-protection supervisory
            authority.
          </li>
        </ul>
        <p>
          to exercise any of these rights, email{" "}
          <a href="mailto:privacy@jmy.app">privacy@jmy.app</a>. we will respond
          within one month of receipt, extendable by two further months for
          complex requests, in which case we will notify you of the extension
          and the reasons.
        </p>
      </Section>

      <Section n="09" title="children">
        <p>
          jmy is strictly an 18+ service. we do not knowingly collect personal
          data from anyone under 18. if you believe a minor is using jmy, please
          report the account in-app or email{" "}
          <a href="mailto:safety@jmy.app">safety@jmy.app</a>; we will remove the
          account immediately and delete the associated data.
        </p>
      </Section>

      <Section n="10" title="changes to this policy">
        <p>
          we may update this policy from time to time. material changes will be
          communicated to you in advance via an in-app notice and, where you
          have a verified email address on file, by email. the “last updated”
          date at the top of this page indicates the date of the most recent
          revision. continued use of jmy after the effective date constitutes
          your acceptance of the updated policy.
        </p>
      </Section>

      <Section n="11" title="contact us">
        <p>
          for privacy-related enquiries:{" "}
          <a href="mailto:privacy@jmy.app">privacy@jmy.app</a>.
        </p>
        <p>
          for safety reports, off-platform incidents, or content concerns:{" "}
          <a href="mailto:safety@jmy.app">safety@jmy.app</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
