import Image from 'next/image'
import TeamMemberImage01 from '@/public/images/team-member-01.jpg'
import TeamMemberImage02 from '@/public/images/team-member-02.jpg'
import TeamMemberImage03 from '@/public/images/team-member-03.jpg'
import TeamMemberImage04 from '@/public/images/team-member-04.jpg'
import TeamMemberImage05 from '@/public/images/team-member-05.jpg'
import TeamMemberImage06 from '@/public/images/team-member-06.jpg'
import TeamMemberImage07 from '@/public/images/team-member-07.jpg'
import TeamMemberImage08 from '@/public/images/team-member-08.jpg'

export default function TeamMembers() {  
  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">What do we value? All sorts of things!</h2>
          </div>

          {/* Team members */}
          <div className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none" data-aos-id-team>

            {/* 1st member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage01} width={120} height={120} alt="Member 01" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Mark Lamprecht</h4>
              <div className="font-medium text-blue-600">CEO &amp; Co-founder</div>
            </div>

            {/* 2nd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={100}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage02} width={120} height={120} alt="Member 02" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Elisa Nguyen</h4>
              <div className="font-medium text-blue-600">Co-Founder, Lead Engineer</div>
            </div>

            {/* 3rd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={200}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage03} width={120} height={120} alt="Member 03" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Travis Stephens</h4>
              <div className="font-medium text-blue-600">Senior Software Engineer</div>
            </div>

            {/* 4th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={300}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage04} width={120} height={120} alt="Member 04" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Cameron Mckay</h4>
              <div className="font-medium text-blue-600">Senior UX/UI Designer</div>
            </div>

            {/* 5th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={400}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage05} width={120} height={120} alt="Member 05" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Patricia Curnock</h4>
              <div className="font-medium text-blue-600">Software Engineer</div>
            </div>

            {/* 6th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={500}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage06} width={120} height={120} alt="Member 06" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Amanda Danish</h4>
              <div className="font-medium text-blue-600">Business Development</div>
            </div>

            {/* 7th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={600}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage07} width={120} height={120} alt="Member 07" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Zoltan Jackson</h4>
              <div className="font-medium text-blue-600">Marketing Manager</div>
            </div>

            {/* 8th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={700}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage08} width={120} height={120} alt="Member 08" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Sara Tolinski</h4>
              <div className="font-medium text-blue-600">Community Manager</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}