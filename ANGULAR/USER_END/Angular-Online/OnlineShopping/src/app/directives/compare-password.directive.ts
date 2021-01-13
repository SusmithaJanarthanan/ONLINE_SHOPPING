import { Directive, Attribute } from '@angular/core';
import { Validator,  NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appComparePassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ComparePasswordDirective, multi: true}]

})
export class ComparePasswordDirective implements Validator {

  constructor(@Attribute('appComparePassword') public comparer: string,
              @Attribute('parent') public parent: string) {}

              validate(c: any): {[key: string]: any} {
                const e = c.root.get(this.comparer);

                if (e && c.value !== e.value && !this.isParent) {
                  return { compare: true };
                }

                if (e && c.value === e.value && this.isParent) {
                    delete e.errors['compare'];
                    if (!Object.keys(e.errors).length) {
                        e.setErrors(null);
                    }
                }

                if (e && c.value !== e.value && this.isParent) {
                    e.setErrors({ compare: true });
                }
                  return c;
              }
              private get isParent() {
                if (!this.parent) {
                    return false;
                }
                return this.parent === 'true' ? true : false;
              }


            }
