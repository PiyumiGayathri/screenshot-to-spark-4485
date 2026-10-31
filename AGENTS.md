<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Shared brand graphics (logo, ornaments, line icons) live in `src/components/brand.tsx`; reuse them instead of redrawing per page so both pages stay visually identical.
- Site is UI-only: non-navigating links/buttons render as `<span>`/`<button type="button">` with no handlers, so no dead routes are referenced.
