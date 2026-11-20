// Content for /guides/. Edit here, then run: node tools/guides.mjs . && node tools/gen.mjs .
export const UPDATED = '2026-11-20'

const MENU = 'Menu names can differ slightly between iOS versions.'

export const GUIDES = [
{
 slug: 'iphone-storage-full',
 type: 'hub',
 title: 'iPhone Storage Full: What to Do (Step-by-Step Fix)',
 h1: 'iPhone storage full: what to do',
 desc: 'Your iPhone says storage is full. See what is using the space, the quickest ways to free it, and what to do when deleting does not help.',
 tldr: 'Open <b>Settings › General › iPhone Storage</b> to see what is using the space. The biggest wins are usually photos and videos, large apps, and message attachments. Free a few GB there first, then deal with caches and System Data.',
 sections: [
  { h: 'Step 1: See what is using the space', html: `<p>Go to <b>Settings › General › iPhone Storage</b>. Wait a few seconds while the bar finishes loading. The coloured bar splits your storage into groups such as Apps, Photos, Media, Messages, iOS and System Data. Below it is a list of apps sorted by size.</p><p>Look at the top three items. For most people it is Photos, one or two big apps, and Messages or WhatsApp. That tells you where to spend your time.</p>` },
  { h: 'Step 2: Free space where it is biggest', html: `<table><thead><tr><th scope="col">If the biggest item is</th><th scope="col">Do this</th></tr></thead><tbody>
<tr><th scope="row">Photos or videos</th><td>Delete duplicates, screenshots and long videos you no longer need. Then empty <b>Recently Deleted</b>, or the space does not come back. See <a href="/guides/iphone-storage-full-after-deleting/">storage still full after deleting</a>.</td></tr>
<tr><th scope="row">A large app</th><td>Tap the app in the list and choose <b>Offload App</b>. This removes the app but keeps its documents and data, so you can reinstall later without losing them.</td></tr>
<tr><th scope="row">Messages</th><td>Tap Messages in the storage list and use <b>Review Large Attachments</b>. You can also set <b>Settings › Messages › Keep Messages</b> to 1 year or 30 days.</td></tr>
<tr><th scope="row">WhatsApp</th><td>Clear large files from inside WhatsApp. See the <a href="/guides/whatsapp-storage-iphone/">WhatsApp storage guide</a>.</td></tr>
<tr><th scope="row">System Data</th><td>Restart your iPhone and clear Safari website data. See <a href="/guides/iphone-system-data-storage/">what System Data is and how to reduce it</a>.</td></tr>
</tbody></table>` },
  { h: 'Step 3: Use the built-in recommendations', html: `<p>At the top of the iPhone Storage screen, iOS may show recommendations such as <b>Offload Unused Apps</b>, <b>Review Large Attachments</b> and <b>Optimize Photos</b>. They are safe to read through before you tap anything. Offloading unused apps keeps their data and only removes the app itself.</p>` },
  { h: 'Step 4: Move photos off the phone safely', html: `<p>If photos are the problem, you have two sound options. Turn on <b>iCloud Photos</b> with <b>Optimize iPhone Storage</b> (Settings › your name › iCloud › Photos), or copy your photos to a computer and then delete them from the phone. Do not delete originals until you have confirmed the copy is somewhere else. If you use iCloud Photos, deleting a photo on the iPhone also deletes it from iCloud and your other devices. See <a href="/guides/iphone-storage-full-with-icloud/">iPhone storage full but you have iCloud</a>.</p>` },
  { h: 'Step 5: If it is still full', html: `<ul><li>Restart the iPhone, then check the storage screen again. The numbers can take a few minutes to update.</li><li>Update iOS if an update is waiting and you have enough space for it.</li><li>As a last resort, back up the phone, erase it and restore from the backup. This clears many leftover temporary files, but only do it with a complete backup.</li></ul>` }
 ],
 faq: [
  ['Why does my iPhone say storage is full when I have few photos?', 'Photos are only one part of storage. Apps, their data, messages, downloaded media and System Data all count. Check the bar under Settings › General › iPhone Storage to see which group is largest.'],
  ['Will deleting apps delete my data?', 'Deleting an app removes its data too. <b>Offload App</b> removes only the app and keeps its documents and data, which is safer when you only need space.'],
  ['How much free space should I keep?', 'Aim for at least a few GB free. iOS needs room for updates, temporary files and the camera. Many people find the phone behaves better with 5 to 10 GB spare.'],
  ['Does buying iCloud storage fix a full iPhone?', 'Not by itself. iCloud storage and iPhone storage are separate. iCloud only helps if you use it to hold photos or backups so you can remove copies from the phone.']
 ],
 related: ['iphone-system-data-storage', 'iphone-storage-full-after-deleting', 'what-happens-when-iphone-storage-is-full', 'whatsapp-storage-iphone']
},
{
 slug: 'iphone-system-data-storage',
 type: 'hub',
 title: 'iPhone System Data Storage: What It Is and How to Reduce It',
 h1: 'iPhone System Data storage: what it is and how to reduce it',
 desc: 'System Data is the grey part of your iPhone storage bar. Learn what it contains, why it grows, and which fixes actually reduce it.',
 tldr: '<b>System Data</b> is storage used by caches, logs, temporary files, voices and other items iOS manages. You cannot delete it directly. It usually shrinks after a restart, clearing Safari website data, removing heavy apps, and keeping iOS updated. In older iOS versions the same category was called <b>Other</b>.',
 sections: [
  { h: 'What is System Data on iPhone?', html: `<p>System Data (earlier called <b>Other</b>) is a catch-all group in <b>Settings › General › iPhone Storage</b>. It includes things that are not apps, photos, media or the iOS system itself: caches from apps and Safari, temporary and log files, downloaded Siri voices and language assets, streaming caches, and some update files. Apple does not list every item, so the exact contents differ by phone.</p><p>It is normal for System Data to be several GB. It becomes a problem when it grows to tens of GB, or when the storage screen is slow to update.</p>` },
  { h: 'Why does it get so large?', html: `<ul><li><b>Streaming and downloads.</b> Music, video and podcast apps cache content. Heavy streaming builds up large caches.</li><li><b>Safari and app caches.</b> Browsing history, website data and app caches add up over time.</li><li><b>Large message history.</b> Some message data is counted outside the Messages group.</li><li><b>Failed or partial updates.</b> A half-finished iOS or app update can leave temporary files behind.</li><li><b>Almost-full storage.</b> When the phone is nearly full, it can show inflated numbers until it finishes cleaning up.</li></ul>` },
  { h: 'How to reduce System Data', html: `<ol><li><b>Restart the iPhone.</b> iOS clears some temporary files on restart. Check the storage screen again after a few minutes.</li><li><b>Clear Safari data.</b> Go to <b>Settings › Safari › Clear History and Website Data</b>. On iOS 18 it is under <b>Settings › Apps › Safari</b>. This signs you out of websites.</li><li><b>Offload or delete heavy apps.</b> Tap an app in iPhone Storage. If it shows a large Documents &amp; Data figure, deleting and reinstalling it clears that cache. Offloading alone keeps the data.</li><li><b>Trim downloaded media.</b> Remove offline music, podcasts and videos you no longer use.</li><li><b>Update iOS.</b> Updates can clear old files and fix storage reporting bugs. You need free space to install them.</li><li><b>Back up, erase and restore.</b> This is the strongest option and clears most System Data, but only use it with a complete backup.</li></ol>` },
  { h: 'What does not work', html: `<p>There is no menu to delete System Data directly. Apps that promise to clear it in one tap usually clear only their own cache, or remove photos and files you could have chosen yourself. Be careful with any tool that asks for payment to remove System Data. What a cleaner can do honestly is find big files you control, such as duplicate photos, screenshots and large videos. See <a href="/guides/iphone-storage-full/">iPhone storage full: what to do</a>.</p>` }
 ],
 faq: [
  ['Is "Other" the same as System Data?', 'Yes, in practice. Older iOS versions labelled this group Other. Newer versions split the bar into iOS and System Data.'],
  ['Is it safe to clear System Data?', 'The steps above only remove temporary data. Restarting, clearing Safari website data and offloading apps do not delete your photos or messages.'],
  ['Why did System Data grow after an iOS update?', 'An update can leave temporary files for a while. Restart the phone and check again after a day. If it stays high, clear Safari data and review heavy apps.'],
  ['How big should System Data be?', 'There is no single correct size. A few GB is common. If it takes up a large share of your storage and keeps growing, work through the steps above.']
 ],
 related: ['iphone-storage-full', 'iphone-storage-full-after-deleting', 'what-happens-when-iphone-storage-is-full']
},
{
 slug: 'iphone-storage-full-after-deleting',
 type: 'guide',
 title: 'iPhone Storage Still Full After Deleting Photos? Fix It',
 h1: 'Why is my iPhone storage still full after deleting everything?',
 desc: 'Deleted photos and apps but the storage bar did not change? Learn why, and how to get the space back, from Recently Deleted to restarting.',
 tldr: 'Deleted photos move to <b>Recently Deleted</b> and keep using space for up to 30 days. Open <b>Photos › Albums › Utilities › Recently Deleted</b> and choose <b>Delete All</b>. Then restart the iPhone and wait a few minutes for the storage figure to update.',
 sections: [
  { h: 'The most common cause: Recently Deleted', html: `<p>When you delete a photo or video, iOS does not remove it right away. It moves it to the <b>Recently Deleted</b> album, where it stays for up to 30 days. It still uses storage there.</p><ol><li>Open <b>Photos › Albums</b> and scroll to <b>Utilities › Recently Deleted</b>. On older iOS versions the album sits directly under Albums. You may need Face ID or your passcode.</li><li>Tap <b>Select</b>, then <b>Delete All</b>.</li></ol><p>This permanently deletes those items, so make sure you do not need any of them.</p>` },
  { h: 'Other places that hold deleted items', html: `<ul><li><b>Files app.</b> Open Files › Browse › Recently Deleted and delete items there.</li><li><b>Messages.</b> Deleted conversations can sit in a Recently Deleted list on newer iOS versions. Check the Messages app.</li><li><b>Notes and Voice Memos.</b> Both keep deleted items in a Recently Deleted folder for a while.</li></ul>` },
  { h: 'The storage bar has not refreshed', html: `<p>The figure under <b>Settings › General › iPhone Storage</b> can lag behind reality. Restart the iPhone, open the screen, and give it a couple of minutes to recalculate. If it still looks wrong, close Settings from the app switcher and open it again.</p>` },
  { h: 'You use iCloud Photos', html: `<p>With iCloud Photos on, a deleted photo is removed from every device that uses the same iCloud account, and it lands in Recently Deleted on all of them. With <b>Optimize iPhone Storage</b> on, the iPhone keeps smaller versions and downloads originals when needed. See <a href="/guides/iphone-storage-full-with-icloud/">storage full but you have iCloud</a>.</p>` },
  { h: 'You deleted an app, but its data is still there', html: `<p>Deleting an app removes its data too. <b>Offloading</b> removes the app but deliberately keeps its documents and data, so the figure may barely change. Tap the app in iPhone Storage and choose <b>Delete App</b> if you want the data gone as well.</p>` }
 ],
 faq: [
  ['How long do deleted photos stay in Recently Deleted?', 'Up to 30 days. After that iOS removes them automatically, but you can delete them sooner.'],
  ['Can I get a photo back after emptying Recently Deleted?', 'Not from the phone. If you have an iCloud or computer backup made before you deleted it, you may be able to restore it from there.'],
  ['Why is storage full when I deleted everything I could?', 'Photos are not the only thing using space. Check the storage bar for apps, messages and System Data. See <a href="/guides/iphone-system-data-storage/">System Data</a>.']
 ],
 related: ['iphone-storage-full', 'cant-delete-photos-iphone-storage-full', 'iphone-system-data-storage']
},
{
 slug: 'whatsapp-storage-iphone',
 type: 'guide',
 title: 'WhatsApp Taking Up iPhone Storage? How to Free Space',
 h1: 'WhatsApp is filling my iPhone storage: how to free space',
 desc: 'WhatsApp photos, videos and voice notes can use many GB. Find the biggest chats, clear large files, and stop media saving automatically.',
 tldr: 'In WhatsApp, open <b>Settings › Storage and Data › Manage Storage</b>. Review the largest chats and files, then delete what you do not need. Also turn off automatic saving of received media to your photo library, so photos are not stored twice.',
 sections: [
  { h: 'Check how much WhatsApp uses', html: `<p>Go to <b>Settings › General › iPhone Storage</b> on the iPhone and find WhatsApp in the list. The figure combines the app and all the media it stores. If it is several GB, a few busy group chats are usually the cause.</p>` },
  { h: 'Clear large files from inside WhatsApp', html: `<ol><li>Open WhatsApp and go to <b>Settings › Storage and Data › Manage Storage</b>.</li><li>Review the list of chats sorted by size, and the section for large files.</li><li>Open a big chat and select the media to remove, or clear the chat's media.</li></ol><p>Deleting media on your phone does not delete it for the other people in the chat. Only do this for files you do not need, since they cannot be recovered unless a backup or the sender still has them.</p>` },
  { h: 'Stop photos being saved twice', html: `<p>If WhatsApp saves incoming photos and videos to your photo library, they use space in two places: in WhatsApp and in Photos. Open <b>WhatsApp › Settings › Chats</b> and switch off the option that saves incoming media to your library. You can also turn off it for individual chats from the chat info screen.</p>` },
  { h: 'Reduce automatic downloads', html: `<p>Under <b>Settings › Storage and Data</b>, check the media auto-download options for photos, audio, videos and documents. Setting videos and documents to download only when you tap them stops big files from arriving by themselves.</p>` },
  { h: 'Tidy the rest of your photos', html: `<p>WhatsApp often adds many near-duplicate photos, memes and screenshots to your library. Review those in Photos, or use a cleaner such as <a href="/klenzer-app/">Klenzer</a> to find duplicates, screenshots and large videos so you can choose what to remove. Then empty Recently Deleted, see <a href="/guides/iphone-storage-full-after-deleting/">why storage can stay full after deleting</a>.</p>` }
 ],
 faq: [
  ['Will clearing storage delete my chats?', 'Clearing media removes the photos, videos and files, not the text of your messages, unless you choose to delete the whole chat.'],
  ['Does a WhatsApp backup use iPhone storage?', 'The backup is stored in iCloud, not on the phone. It uses iCloud space, which is separate from your iPhone storage.'],
  ['Why does WhatsApp show more storage than my messages need?', 'Most of the space is media: photos, videos, voice notes and documents. Text messages take very little.']
 ],
 related: ['iphone-storage-full', 'iphone-storage-full-after-deleting', 'iphone-system-data-storage']
},
{
 slug: 'iphone-storage-full-with-icloud',
 type: 'guide',
 title: 'iPhone Storage Full but You Have iCloud? Here Is Why',
 h1: 'Why is my iPhone storage full when I have iCloud?',
 desc: 'iCloud storage and iPhone storage are separate. Learn why your phone can be full with plenty of iCloud space, and how to set iCloud Photos correctly.',
 tldr: 'iCloud storage is space online. iPhone storage is the space on the phone itself. Paying for more iCloud does not free space on the phone unless iCloud Photos is on with <b>Optimize iPhone Storage</b>, so originals can be replaced by smaller versions on the device.',
 sections: [
  { h: 'Two different storages', html: `<table><thead><tr><th scope="col"></th><th scope="col">iPhone storage</th><th scope="col">iCloud storage</th></tr></thead><tbody>
<tr><th scope="row">Where it is</th><td>On the phone</td><td>On Apple's servers</td></tr>
<tr><th scope="row">Where to check</th><td>Settings › General › iPhone Storage</td><td>Settings › your name › iCloud</td></tr>
<tr><th scope="row">What fills it</th><td>Apps, photos, videos, messages, System Data</td><td>Backups, iCloud Photos, iCloud Drive, mail</td></tr>
<tr><th scope="row">How you add more</th><td>Delete or move things, or buy a bigger phone</td><td>Upgrade your iCloud plan</td></tr>
</tbody></table><p>A free iCloud account includes 5 GB. A phone can be almost full while iCloud has plenty of room, and the other way round.</p>` },
  { h: 'Set iCloud Photos to save phone space', html: `<ol><li>Go to <b>Settings › your name › iCloud › Photos</b>.</li><li>Turn on <b>Sync this iPhone</b> (called iCloud Photos on older versions).</li><li>Choose <b>Optimize iPhone Storage</b>.</li></ol><p>With this on, the iPhone keeps smaller versions and downloads full-size photos when you open them. If you pick <b>Download and Keep Originals</b>, nothing is saved on the phone.</p>` },
  { h: 'Know what deleting does with iCloud Photos', html: `<p>iCloud Photos is a sync service, not a backup. Deleting a photo on the iPhone deletes it from iCloud and your other devices too, and it sits in Recently Deleted for up to 30 days. To free phone space without losing photos, use Optimize iPhone Storage instead of deleting.</p>` },
  { h: 'Wait for the upload to finish', html: `<p>Photos upload before the phone can replace originals. On a slow connection or with Low Power Mode on, uploading can take a long time. Connect to Wi-Fi and power, keep Photos open for a while, and check progress at the bottom of the Photos library screen.</p>` },
  { h: 'Things iCloud does not shrink', html: `<p>Optimizing photos does not reduce apps, downloaded media, messages or System Data. If those are the largest items, see <a href="/guides/iphone-system-data-storage/">System Data</a> and <a href="/guides/iphone-storage-full/">iPhone storage full: what to do</a>.</p>` }
 ],
 faq: [
  ['Should I buy more iCloud storage?', 'Only if iCloud itself is full, for example it says you cannot back up or upload photos. It does not directly free space on the iPhone.'],
  ['Can I use iCloud as a backup and still free the phone?', 'Yes. Back up the phone to iCloud, use Optimize iPhone Storage for photos, and delete large files you no longer need on the device.'],
  ['What happens if iCloud is full?', 'New photos stop uploading and backups can fail. Free iCloud space or upgrade your plan to resume.']
 ],
 related: ['iphone-storage-full', 'iphone-storage-full-after-deleting', 'is-64gb-enough-for-iphone']
},
{
 slug: 'is-64gb-enough-for-iphone',
 type: 'guide',
 title: 'Is 64GB Enough for an iPhone? Storage Sizes Compared',
 h1: 'Is 64GB enough for an iPhone?',
 desc: 'Is 64GB enough for iPhone? A plain guide to what fits in 64GB, 128GB and 256GB, with photo and video size maths and who should pick which.',
 tldr: '64GB is enough if you mostly message, browse and stream, and keep photos in iCloud or on a computer. It gets tight if you shoot lots of 4K video, download media or play big games. For most people who keep photos on the phone, 128GB is the safer choice.',
 sections: [
  { h: 'Usable space is less than the number on the box', html: `<p>iOS, built-in apps and system files take part of the storage before you add anything. A 64GB phone therefore has noticeably less than 64GB free on day one. Check <b>Settings › General › About</b> for the capacity and <b>iPhone Storage</b> for what is used.</p>` },
  { h: 'How much space photos and videos take', html: `<p>These are rough planning figures. Real sizes depend on the iPhone model, camera settings and what you shoot. Check <b>Settings › Camera › Record Video</b>, where iOS shows an approximate size per minute for each setting on your phone.</p><table><thead><tr><th scope="col">Item</th><th scope="col">Rough size</th><th scope="col">What it means</th></tr></thead><tbody>
<tr><th scope="row">Typical photo (HEIC)</th><td>About 2 to 3 MB</td><td>1,000 photos is around 2 to 3 GB</td></tr>
<tr><th scope="row">1080p video, 30 fps</th><td>About 60 MB a minute</td><td>1 hour is around 3.6 GB</td></tr>
<tr><th scope="row">4K video, 60 fps</th><td>About 400 MB a minute</td><td>1 hour is around 24 GB</td></tr>
<tr><th scope="row">ProRAW photo</th><td>Often 25 MB or more</td><td>1,000 photos can pass 25 GB</td></tr>
</tbody></table>` },
  { h: 'Which size suits which person', html: `<table><thead><tr><th scope="col">You mostly</th><th scope="col">Likely fit</th></tr></thead><tbody>
<tr><th scope="row">Message, browse, stream, keep photos in iCloud</th><td>64GB can work, if you manage storage</td></tr>
<tr><th scope="row">Keep thousands of photos and some videos on the phone, play a few games</th><td>128GB</td></tr>
<tr><th scope="row">Shoot lots of 4K or ProRAW, download films or music, keep big offline libraries</th><td>256GB or more</td></tr>
</tbody></table><p>This is a rule of thumb, not a guarantee. A phone you keep for many years also collects more apps and data over time.</p>` },
  { h: 'If you already have 64GB', html: `<ul><li>Turn on iCloud Photos with Optimize iPhone Storage. See <a href="/guides/iphone-storage-full-with-icloud/">how it works</a>.</li><li>Stream instead of downloading, and offload unused apps.</li><li>Record video at 1080p unless you need 4K.</li><li>Review duplicates and screenshots regularly. See <a href="/guides/iphone-storage-full/">iPhone storage full: what to do</a>.</li></ul>` },
  { h: 'Older and used phones', html: `<p>64GB iPhones are mostly older models you might find used or refurbished. Newer iOS versions and apps are larger than they used to be, so an old 64GB phone can feel fuller than the same size did when it was new.</p>` }
 ],
 faq: [
  ['Is 64GB enough for iPhone in 2026?', 'It can be if you rely on iCloud and streaming. If you keep photos and videos on the phone, you will probably run out sooner than with 128GB.'],
  ['How many photos fit in 64GB?', 'Roughly 15,000 or more if photos average 3 MB and nothing else used space, but apps and iOS take a large share, so the real number is lower.'],
  ['Can I add storage to an iPhone later?', 'No. iPhone storage is fixed when you buy it. You can add cloud storage or external drives for some files.']
 ],
 related: ['iphone-storage-full', 'iphone-storage-full-with-icloud', 'what-happens-when-iphone-storage-is-full']
},
{
 slug: 'what-happens-when-iphone-storage-is-full',
 type: 'guide',
 title: 'What Happens When iPhone Storage Is Full?',
 h1: 'What happens when your iPhone storage is full?',
 desc: 'A full iPhone can stop taking photos, installing updates and saving data. See the exact problems, the warning signs, and how to free enough space.',
 tldr: 'When storage is full, the iPhone cannot save new photos, videos or files, may fail to install apps or iOS updates, and can slow down or crash apps. Your existing data is not deleted automatically, but you will see warnings until you free space.',
 sections: [
  { h: 'What stops working', html: `<table><thead><tr><th scope="col">Area</th><th scope="col">What you may notice</th></tr></thead><tbody>
<tr><th scope="row">Camera</th><td>A message that storage is full, or photos and videos fail to save</td></tr>
<tr><th scope="row">Apps</th><td>Cannot install or update apps; apps crash or lose changes when saving</td></tr>
<tr><th scope="row">iOS updates</th><td>Update will not download or install without enough free space</td></tr>
<tr><th scope="row">Messages</th><td>Attachments fail to download or send</td></tr>
<tr><th scope="row">Backups</th><td>Backups can fail if the phone cannot create temporary files</td></tr>
<tr><th scope="row">Speed</th><td>General slowness while the system struggles for working space</td></tr>
</tbody></table>` },
  { h: 'Does the iPhone delete anything on its own?', html: `<p>It does not delete your photos, messages or apps. iOS may clear some caches and temporary files when it needs room, which is why the figures can change by themselves. Your own content stays until you remove it.</p>` },
  { h: 'Warning signs before it is completely full', html: `<ul><li>A banner saying storage is almost full.</li><li>Downloads or updates stalling.</li><li>The Camera warning when you try to record.</li><li>Photos and Messages loading slowly.</li></ul>` },
  { h: 'How much space you need back', html: `<p>Free at least a few GB so iOS can work normally, and more if you need to install an update. Start with the largest items under <b>Settings › General › iPhone Storage</b>. See <a href="/guides/iphone-storage-full/">iPhone storage full: what to do</a> for the step-by-step order.</p>` },
  { h: 'Prevent it happening again', html: `<ul><li>Use iCloud Photos with Optimize iPhone Storage, or copy photos to a computer regularly.</li><li>Set Messages to keep messages for 1 year instead of forever.</li><li>Offload apps you rarely use.</li><li>Review duplicates and screenshots every month, by hand or with a cleaner app.</li></ul>` }
 ],
 faq: [
  ['Can a full iPhone lose my photos?', 'Not because it is full. The risk is losing photos when you delete things in a hurry. Back up before clearing space.'],
  ['Will my iPhone still make calls when storage is full?', 'Usually yes. Calls and basic functions keep working, but apps and updates can fail.'],
  ['Does a full iPhone damage the battery?', 'No. Low storage does not harm the battery, although a struggling phone can feel slower.']
 ],
 related: ['iphone-storage-full', 'iphone-storage-full-after-deleting', 'is-64gb-enough-for-iphone']
},
{
 slug: 'cant-delete-photos-iphone-storage-full',
 type: 'guide',
 title: "Can't Delete Photos on iPhone? Causes and Fixes",
 h1: "iPhone storage full and you can't delete photos",
 desc: 'Photos will not delete from your iPhone, or storage will not free up? Check synced photos, iCloud, Recently Deleted, and a stuck phone, step by step.',
 tldr: 'The usual causes are photos synced from a computer (these cannot be deleted on the phone), a nearly full phone that cannot process deletions, and items sitting in Recently Deleted. Restart, free a little space by offloading an app, then try again.',
 sections: [
  { h: 'Check whether the photos were synced from a computer', html: `<p>Photos that were put on the iPhone by syncing with a Mac or PC through Finder or iTunes show up in synced albums. You cannot delete them on the phone. Remove them from the synced folder or album on the computer, then sync again, or turn off photo syncing in the device settings on the computer.</p>` },
  { h: 'Free a small amount of space first', html: `<p>If the phone is completely full, deleting can fail or crawl. Offload one large app (Settings › General › iPhone Storage › the app › <b>Offload App</b>) to make room, then delete photos again.</p>` },
  { h: 'Restart the iPhone', html: `<p>A restart clears many temporary glitches. After it comes back, open Photos and try deleting a small batch instead of thousands at once. Large selections can stall.</p>` },
  { h: 'Empty Recently Deleted', html: `<p>Deleted photos do not free space until they are removed from <b>Recently Deleted</b>. Open <b>Photos › Albums › Utilities › Recently Deleted › Select › Delete All</b>. More detail in <a href="/guides/iphone-storage-full-after-deleting/">storage still full after deleting</a>.</p>` },
  { h: 'Check iCloud Photos', html: `<p>With iCloud Photos on, deletion syncs with iCloud. If the phone is offline or iCloud is busy, the delete can take time to complete. Connect to Wi-Fi and wait. Make sure you really want the photos gone from all devices first. See <a href="/guides/iphone-storage-full-with-icloud/">iCloud and iPhone storage</a>.</p>` },
  { h: 'Still stuck', html: `<ul><li>Update iOS if an update is available and you have the space.</li><li>Back up the phone, then try again.</li><li>Contact Apple Support if Photos still refuses to delete items.</li></ul>` }
 ],
 faq: [
  ['Why is the Delete button missing for some photos?', 'The most common reason is that they were synced from a computer. Shared album items you did not add also cannot be deleted in the same way.'],
  ['Is it safe to delete thousands of photos at once?', 'It can stall the phone. Delete in smaller batches and back up first.'],
  ['Why does storage not change after I delete photos?', 'They are in Recently Deleted for up to 30 days. Empty that album to get the space back.']
 ],
 related: ['iphone-storage-full-after-deleting', 'iphone-storage-full', 'iphone-storage-full-with-icloud']
}
]
