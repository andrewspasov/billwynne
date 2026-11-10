# billwynne.com (2027 redesign)

Plain HTML, CSS and JavaScript with no build step. Upload the contents of this folder to the web host's root (`public_html`).

## Before launch
1. **Booking link**: in `index.html`, search for `calendly.com/` and paste Bill's Calendly link.
2. **Contact form**: create a free form at https://formspree.io, then replace `YOUR_FORM_ID` in `index.html`.
3. **Company details**: GO AI Global and Auvoria Prime text comes from their websites and Bill's LinkedIn (Oct 2026). Have Bill review it.
4. **Photo**: replace `img/bill.png` with a recent, high-resolution square photo (at least 800×800).
5. Check the personal section (wife/children wording, verse) with Bill.
6. **Remove the preview `noindex` line** near the top of `index.html` so Google can find the live site.

## Preview locally
    python3 -m http.server 4173 --directory site
