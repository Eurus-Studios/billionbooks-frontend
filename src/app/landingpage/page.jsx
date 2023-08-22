"use client"
import  { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import Book from '@/Book.json';
import Cycle from '@/Cycle.json';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const bookControls = useAnimation();
  const cycleControls = useAnimation();
  const [cycleAnimationComplete, setCycleAnimationComplete] = useState(false);


  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const womanOffset = scrollPosition * 1.5;
    const cycleInitialX = -window.innerWidth; 
 
    const animationCompleteWidth = window.innerWidth;
  
    // Calculate the current cycle animation width
    const cycleAnimationWidth = window.innerWidth + cycleInitialX + scrollPosition;
  
    // Update the animation controls
    bookControls.start({ x: womanOffset });
  
    if (cycleAnimationWidth >= animationCompleteWidth) {
      cycleControls.start({ x: animationCompleteWidth - window.innerWidth });
      setCycleAnimationComplete(true);
    } else {
      cycleControls.start({ x: cycleInitialX + scrollPosition });
      setCycleAnimationComplete(false);
    }
  }, [scrollPosition, bookControls, cycleControls]);
  
  
  
  
  return (
    <>
    

 
    <div className="flex">
      <div className="flex hero-bg justify-center items-center relative">
        {/* Red Circle */}
        {/* <div className="w-48 h-48 bg-red-500 rounded-full flex justify-center items-center absolute">
          <motion.div animate={bookControls}>
            <Lottie animationData={Cycle} />
          </motion.div>
        </div> */}

        <motion.div animate={bookControls}>
          <div className="flex justify-center align-middle">
            <Lottie animationData={Cycle} />
            <div className="herotitle text-6xl text-center font-bold">
              BIllIONBOOKS <br />
              <span className="text-5xl text-purple-200">GET YOUR BOOKS</span>
            </div>
          </div>
        </motion.div>

        <motion.div animate={cycleControls}>
          <Lottie animationData={Book} />
        </motion.div>
      </div>
    </div>





    <section className=''>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a vitae ut doloribus voluptatibus fugiat magni explicabo, suscipit cum culpa, at sit labore obcaecati saepe libero, unde ipsum autem. Officiis mollitia, veritatis reiciendis, quasi culpa quia ducimus quisquam nulla, repellendus eveniet assumenda itaque! At ex earum dolorem quo sed obcaecati placeat iure illum nobis laboriosam excepturi cum reiciendis cumque consequuntur illo nesciunt doloremque voluptatibus, facere, ipsam ducimus quam dignissimos sit a. Accusantium ratione nihil asperiores tempora, tempore est obcaecati voluptate unde vero suscipit et repellendus quia consectetur a. Voluptatem sunt voluptatibus possimus fuga impedit nobis ab veritatis, sed nam quia cum sit deserunt saepe eveniet iure. Quaerat tempora laudantium ullam autem voluptatibus perspiciatis assumenda nihil harum, ipsam rerum commodi aperiam? Expedita ea totam voluptates repellendus excepturi, sapiente sit laudantium ratione praesentium officiis laboriosam voluptas quod amet at voluptatibus fugit reiciendis soluta odit commodi? Aperiam sunt odit officiis! Officiis qui cupiditate aliquam obcaecati aspernatur distinctio aut aperiam velit nulla voluptatem esse voluptas hic similique iste repellat ipsa repellendus amet labore eos, tempore, placeat soluta ullam minus deserunt! Veritatis quisquam voluptatem aperiam dolorem quaerat itaque iusto sequi quidem, explicabo iure quibusdam consectetur! Quas dicta ad enim consequuntur culpa molestias quaerat dolorum doloremque iure, sunt saepe asperiores libero voluptates rem vero modi esse ex facilis facere! Cupiditate ea illum neque sunt inventore at aliquid tempora vel incidunt quis necessitatibus dolorem, dicta, provident cumque! Inventore, optio neque officiis, tenetur natus at delectus quidem recusandae, amet vitae porro aliquam officia soluta perferendis. Laudantium, voluptatum inventore qui vel omnis ab repudiandae quisquam dolorem ut similique eaque architecto autem ipsam fugit repellat distinctio debitis adipisci illum ratione voluptatem, odit iusto sapiente! Earum libero repellendus inventore vel iure explicabo mollitia doloremque sint dolorem repellat! Officia, voluptatem consequuntur. Quaerat odit, similique quibusdam earum perferendis libero porro nostrum repellat. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nisi ipsa dolores facilis officiis sit maxime sed tenetur labore dolorem minima expedita corrupti, sint iste illo in accusantium, quisquam laudantium amet atque fugiat numquam odit ab tempora. Magnam, autem mollitia! Dolorum quod non deleniti magnam at expedita excepturi eveniet ad adipisci aperiam, error dolor, aliquam modi ipsa quia laudantium corporis optio consequatur a obcaecati! Eaque, quibusdam deserunt debitis minus odio voluptas non nisi officiis suscipit! Sed laborum reprehenderit iure nemo nostrum impedit, accusamus fugiat repellendus ducimus amet cumque quo ex animi, facilis at dolorum, architecto delectus dicta dolor quaerat consectetur?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque animi facilis nihil accusamus veniam, deserunt fugit, modi minima, aperiam consectetur amet esse sit similique ad repellendus at eligendi eum fuga praesentium quisquam obcaecati! Placeat, provident? Necessitatibus amet iste quod ipsa vitae repudiandae non animi, debitis aut. Ratione porro ut nihil. Libero, aspernatur. Repellendus, aperiam veritatis. Fuga accusantium quaerat non, hic optio deserunt assumenda animi ratione? Repellendus delectus totam maiores et tempore, sit maxime ad id culpa voluptatibus dolorum placeat ratione harum rem sapiente deserunt, amet dolores quis blanditiis ipsum necessitatibus magni nulla quia reprehenderit. Officiis dignissimos animi aliquam expedita sed. Amet accusantium deserunt repellendus quae iusto unde repellat? Alias consectetur exercitationem quisquam facere reprehenderit quaerat magni minus eligendi natus id, eveniet nisi sequi nostrum esse, architecto expedita recusandae rem. Est voluptatem officia qui reiciendis, natus iure accusamus. Quam soluta, laboriosam minima, reiciendis magni sapiente molestiae consectetur praesentium veritatis tenetur, ipsum aut sunt labore. Facere libero vitae nihil nam iure eos possimus est sequi laboriosam nostrum deserunt, impedit numquam adipisci animi perferendis pariatur nemo? Eveniet optio, recusandae natus ducimus quasi dicta reiciendis debitis aut distinctio modi, aliquam harum corrupti tenetur iure est nam libero, amet quod doloribus pariatur nobis illo vero impedit magni! Voluptas, hic eius eaque recusandae cupiditate sit nemo minus enim, vero suscipit aspernatur id qui voluptatibus nostrum sed rem. Amet consequatur commodi deserunt eos fugit, excepturi dolor incidunt! In facilis exercitationem nam sint quisquam quos, unde placeat explicabo vel animi iusto est. Placeat excepturi explicabo in corrupti vitae modi optio dolores totam, exercitationem sunt, aperiam dolorem hic ad nisi. Obcaecati atque aliquam corporis porro ab ipsam maxime ad tenetur suscipit ea quibusdam in nostrum animi ducimus aliquid voluptatum, cupiditate exercitationem! Commodi tempore cumque quis illo perspiciatis molestiae. Quidem hic optio, earum impedit dolor accusantium a officia nemo expedita dignissimos, possimus vitae odit, sequi fugit. Laudantium maiores doloribus delectus quibusdam eius, eum quo autem nulla nihil repellat. Totam dignissimos iusto reiciendis velit, in, voluptatibus alias reprehenderit doloremque asperiores consequuntur tenetur, quos debitis soluta sequi enim quas rem exercitationem? Explicabo facilis deleniti a placeat assumenda magni quidem! Cum rem veniam itaque voluptate, perferendis corrupti commodi ad similique dolorem placeat unde doloribus reiciendis iusto maxime libero dignissimos ut. Soluta fuga dicta perspiciatis quia molestias fugit nihil facilis illum possimus, eum ullam qui blanditiis recusandae quidem omnis magni tempore autem saepe quis animi, veniam eaque? Repudiandae doloremque iusto quis perspiciatis sequi?
</section>

    </>
  );
};

export default LandingPage;


