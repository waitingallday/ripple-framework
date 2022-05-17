---
to: packages/ripple-ui-core/src/components/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.css
---
.<%= h.rplclassname(name) %> {
  background-color: var(--<%= h.rplclassname(name) %>-bg-clr);
  color: var(--<%= h.rplclassname(name) %>-clr);
  padding: var(--rpl-space-2);

  &--primary {
    --<%= h.rplclassname(name) %>-bg-clr: var(--rpl-clr-core-primary);
    --<%= h.rplclassname(name) %>-clr: var(--rpl-clr-core-primary-contrast);
  }

  &--accent {
    --<%= h.rplclassname(name) %>-bg-clr: var(--rpl-clr-core-accent);
    --<%= h.rplclassname(name) %>-clr: var(--rpl-clr-core-accent-contrast);
  }

  &--neutral {
    --<%= h.rplclassname(name) %>-bg-clr: var(--rpl-clr-dark);
    --<%= h.rplclassname(name) %>-clr: var(--rpl-clr-white);
  }
}
