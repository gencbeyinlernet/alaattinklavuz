import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import './content.js';
const c=globalThis.COURSE;
assert.equal(c.days.length,5);
assert.equal(c.days.reduce((n,d)=>n+d.prompts.length,0),30);
assert.equal(c.rubric.reduce((n,r)=>n+r[1],0),100);
for(const d of c.days){assert.equal(d.schedule.reduce((n,s)=>n+parseInt(s[1]),0),360);assert.equal(d.checklist.length,4);assert.equal(d.labs.length,3);assert.equal(d.quiz.length,2);for(const q of d.quiz)assert(q[2]>=0&&q[2]<q[1].length);}
for(const f of ['app.js','content.js'])new vm.Script(fs.readFileSync(f,'utf8'),{filename:f});
const app=fs.readFileSync('app.js','utf8');
const names=[...app.matchAll(/\['([^']+\.(?:md|csv|sql))','/g)].map(m=>m[1]);
for(const n of names)assert(fs.existsSync(`downloads/${n}`),`Missing download ${n}`);
for(const f of ['index.html','style.css','favicon.svg','.nojekyll'])assert(fs.existsSync(f));
const rows=fs.readFileSync('downloads/ornek-kayitlar.csv','utf8').trim().split('\n').slice(1).map(r=>r.trim().split(','));assert.equal(rows.length,10);assert.equal(rows.filter(r=>r[3]==='devam').length,4);assert.equal(rows.filter(r=>r[3]==='tamamlandi').length,3);assert.equal(rows.reduce((n,r)=>n+Number(r[5]),0)/rows.length,65.5);
const guide=fs.readFileSync('downloads/egitim-rehberi.md','utf8');for(const d of c.days)for(const p of d.prompts)assert(guide.includes(p[2]));
assert(!app.includes('innerHTML=state.notes'));assert(fs.readFileSync('downloads/egitim-schema.sql','utf8').includes('with check'));
console.log(`PASS: 5 days × 360 minutes, 30 prompts, 15 labs, 20 checklist items, 10 quiz questions, 100-point rubric, ${names.length} downloads, valid JS, sample CSV and full guide consistency.`);
console.log('SQL is an educational template; no database execution or RLS runtime test was performed on this guide site.');
